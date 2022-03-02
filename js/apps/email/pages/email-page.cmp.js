// import { eventBus } from '../services/eventBus-service.js'
import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js';
export default {
  template: `
  <section class="email-app app-main">
  <email-list :emails="emailsForDisplay"  />
</section>
      
    `,

  components: {
    emailList,
    // carEdit,
  },
  data() {
    return {
      emails: null,
      filterBy: null,
    };
  },
  created() {
    emailService.query().then((emails) => (this.emails = emails));
  },
  methods: {
    // callBus(){
    //     console.log('Calling bus!');
    //     eventBus.emit('test','test data')
    // }
  },
  computed: {
    emailsForDisplay() {
      if (!this.filterBy) return this.emails;
      const regex = new RegExp(this.filterBy.vendor, 'i');
      return this.cars.filter((car) => regex.test(car.vendor));
    },
  },
};
