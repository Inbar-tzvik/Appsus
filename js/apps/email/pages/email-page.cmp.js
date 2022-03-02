// import { eventBus } from '../services/eventBus-service.js'
import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailMenu from '../cmps/email-menu.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
export default {
  template: `
  <section class="email-main-layout">
  <section class="email-menu">
  <email-filter @filteredTxt="setFilterTxt" />

  <email-menu @filtered="setFilterStatus"/>
  </section>
  <section class="email-app app-main">
  <email-list :emails="emailsForDisplay"  />
</section>
</section>
    `,

  components: {
    emailList,
    emailMenu,
    emailFilter,
    // carEdit,
  },
  data() {
    return {
      emails: null,
      filterBy: {
        status: 'inbox',
        txt: '', // no need to support complex text search
        // isRead: true, // (optional property, if missing: show all)
        // isStared: true, // (optional property, if missing: show all)
        // lables: ['important', 'romantic'], // has any of the labels
      },
    };
  },
  created() {
    emailService.query(this.filterBy).then((emails) => (this.emails = emails));
  },
  methods: {
    setFilterStatus(filterBy) {
      this.filterBy.status = filterBy;
      emailService.query(this.filterBy).then((emails) => (this.emails = emails));
    },
    setFilterTxt(txt) {
      this.filterBy.txt = txt;
      emailService.query(this.filterBy).then((emails) => (this.emails = emails));
    },
  },
  computed: {
    emailsForDisplay() {
      return this.emails;
      // if (!this.filterBy)
      // const regex = new RegExp(this.filterBy.vendor, 'i');
      // return this.cars.filter((car) => regex.test(car.vendor));
    },
  },
};
