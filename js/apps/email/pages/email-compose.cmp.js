import { emailService } from '../services/email-service.js';

export default {
  template: `
  <section v-if="composeEmail" class="app-main">
  <h4>New Email</h4>
  <form @submit.prevent="send" >
      <input type="email" v-model="composeEmail.to" placeholder="to">
      <input type="text" v-model="composeEmail.subject" placeholder="Subject">
      <textarea type="text" v-model="composeEmail.body" placeholder="body"></textarea>
      <button> Send </button>
  </form>
  <router-link to="/email">Back to emails</router-link>

</section>
    `,
  data() {
    return {
      composeEmail: null,
    };
  },
  created() {
    this.composeEmail = emailService.getEmptyEmail();
    console.log(this.composeEmail);
  },
  methods: {
    send() {
      console.log('sent');
      emailService.save(this.composeEmail);
    },
  },
  computed: {},
  unmounted() {
    this.composeEmail = null;
  },
};
