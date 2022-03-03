import { emailService } from '../services/email-service.js';

export default {
  template: `
        <section v-if="email" class="email-details app-main">
            <h2>{{email.subject}}</h2>
            <h4>{{email.from.name}} - </h4><span> < {{email.from.email}} ></span>
            <p>{{email.body}}</p>
            <router-link to="/email">Back to emails</router-link>
        </section>
        <section v-else class="loading">
        </section>
    `,
  data() {
    return {
      email: null,
    };
  },
  created() {
    const id = this.$route.params.emailId;
    emailService.get(id).then((email) => {
      this.email = email;
      this.email.isRead = true;
      emailService.update(this.email);
      console.log(email);
    });
  },
  computed: {
    // carImgUrl() {
    //   return `img/${this.car.vendor}.png`;
    // },
  },
};
