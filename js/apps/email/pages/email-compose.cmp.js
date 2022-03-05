import { emailService } from '../services/email-service.js';
export default {
  template: `
  <section v-if="composeEmail" class="app-main compose-email">
  <h4>New Message <router-link to="/email"><i class="fa-solid fa-xmark"></i></router-link></h4>
  <form @submit.prevent="send" >
      <input type="email" v-model="composeEmail.to" placeholder="To">
      <input type="text" v-model="composeEmail.subject" placeholder="Subject">
      <textarea type="text" v-model="composeEmail.body" placeholder="Body">
        </textarea>
        <img v-if="image" :src="getUrl"/>

      <button> Send </button>
  </form>
  <br>
  <router-link to="/email">Back to emails</router-link>

</section>
    `,
  data() {
    return {
      composeEmail: null,
      image: false,
      getUrl: false,
    };
  },

  created() {
    this.composeEmail = emailService.getEmptyEmail();
    if (this.$route.query.body) {
      this.composeEmail.subject = this.$route.query.subject;
      if (this.$route.query.body.startsWith('https')) {
        console.log('https');
        this.image = true;
        this.getUrl = this.$route.query.body;
        // this.$refs.img.src() = 'this.$route.query.body';
      } else {
        this.image = false;
        this.composeEmail.body = this.$route.query.body;
      }
    }
  },
  methods: {
    send() {
      emailService.save(this.composeEmail);
    },
  },
  computed: {},
  unmounted() {
    this.composeEmail = null;
  },
  // watch: {
  //   $route() {
  //     console.log(`Route was changed was modified from `);
  //   },
  // },
};

// const params = new Proxy(new URLSearchParams(window.location.search), {
//   get: (searchParams, prop) => searchParams.get(prop),
// });
// // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
// let value = params.some_key; // "some_value"
