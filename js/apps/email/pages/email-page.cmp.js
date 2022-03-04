// import { eventBus } from '../services/eventBus-service.js'
import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailMenu from '../cmps/email-menu.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailDetails from './email-details.cmp.js';
export default {
  template: `
  <section >
    <email-filter @filteredTxtRead="setFilterTxtRead" />
    <section class="email-main-layout">
    <email-menu class="email-menu" :emails="emailsForDisplay" @filtered="setFilterStatus"/>
  <!-- <section class="email-app app-main"> -->
    <email-list :emails="emailsForDisplay"  @remove="removeEmail"/>
    <!-- <email-details>  -->
<!-- </section> -->
</section>
<section>
`,

  components: {
    emailList,
    emailMenu,
    emailFilter,
    emailDetails,
    // carEdit,
  },
  data() {
    return {
      emails: null,
      filterBy: {
        status: 'inbox',
        txt: '', // no need to support complex text search
        isReadnow: '1', // (optional property, if missing: show all)
        // isStared: true, // (optional property, if missing: show all)
        // lables: ['important', 'romantic'], // has any of the labels
      },
    };
  },
  created() {
    emailService.query(this.filterBy).then((emails) => (this.emails = emails));
  },
  methods: {
    setFilterStatus(filterStat) {
      this.filterBy.status = filterStat;
      emailService.query(this.filterBy).then((emails) => (this.emails = emails));
    },
    setFilterTxtRead(filter) {
      this.filterBy.txt = filter.txt;
      this.filterBy.isReadnow = filter.isRead;
      emailService.query(this.filterBy).then((emails) => (this.emails = emails));
    },

    removeEmail(id) {
      emailService
        .remove(id)
        .then(() => {
          const idx = this.emails.findIndex((email) => email.id === id);
          this.emails.splice(idx, 1);
          // eventBus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
        })
        .catch((err) => {
          console.error(err);
          // eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
        });
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
