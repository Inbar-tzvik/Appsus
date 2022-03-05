// import { eventBus } from '../services/eventBus-service.js'
import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailMenu from '../cmps/email-menu.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailDetails from './email-details.cmp.js';
export default {
  template: `
  <section  class="email-main-page">
    <email-filter @filteredTxtRead="setFilterTxtRead" />
    <section class="email-main-layout">
    <button @click="isMenu=true" class="menu-button"><i class="fa-solid fa-bars"></i></button>
    <email-menu @closeMenu="isMenu=false" :isMenu="isMenu" :mailOpen="isMailToShow" class="email-menu" :emailsOnlyInbox="emailsInbox" :emails="emailsForDisplay" @filtered="setFilterStatus"/>
  <!-- <section class="email-app app-main"> -->
    <email-list v-if="!isMailToShow" :emails="emailsForDisplay" @show="show"  @remove="removeEmail" @changeState="change"/>
    <router-view  v-if="isMailToShow" :emailId="idToShow"  @edit-exit="editOff" ></router-view>

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
      emailsInbox: null,
      filterBy: {
        status: 'inbox',
        txt: '', // no need to support complex text search
        isReadnow: '1', // (optional property, if missing: show all)
        // isStared: true, // (optional property, if missing: show all)
        // lables: ['important', 'romantic'], // has any of the labels
      },
      isMailToShow: false,
      idToShow: null,
      isMenu: false,
    };
  },
  created() {
    this.queryService();
    this.emailsOnlyInbox();
  },

  methods: {
    change() {
      console.log('changed');
      this.emailsOnlyInbox();
    },
    show(id) {
      this.isMailToShow = true;
      this.idToShow = id;
      this.$router.push(`/email/${id}`);
      this.queryService();
      this.emailsOnlyInbox();
      console.log(this.emails);
    },
    setFilterStatus(filterStat) {
      this.isMailToShow = false;
      this.$router.push(`/email`);
      this.filterBy.status = filterStat;
      this.queryService();
      this.emailsOnlyInbox();
    },
    setFilterTxtRead(filter) {
      this.filterBy.txt = filter.txt;
      this.filterBy.isReadnow = filter.isRead;
      this.queryService();
      this.emailsOnlyInbox();
    },
    queryService() {
      emailService.query(this.filterBy).then((emails) => (this.emails = emails));
    },
    emailsOnlyInbox() {
      emailService
        .query({
          status: 'inbox',
          txt: '',
          isReadnow: '1',
        })
        .then((emails) => (this.emailsInbox = emails));
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
  watch: {
    '$route.params.emailId': {
      handler() {
        console.log('helloooooo');
        this.queryService();
      },
      immediate: true,
    },
  },
};
