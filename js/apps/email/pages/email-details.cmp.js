import { emailService } from '../services/email-service.js';

export default {
  props: ['emailId'],
  template: `
        <section v-if="email" class="email-details app-main" >
            <div class="subject"><h2>{{email.subject}} </h2><span><i class="fa-solid fa-trash"></i>
            <i class="fa-solid fa-print"></i> <i class="fa-solid fa-up-right-from-square"></i>
            </span></div>
            <div class="data-head"> 
                <i class="fa fa-user"></i>
                 {{email.from.name}} 
                 <span class="mail"> < {{email.from.email}} ></span>
                  <span class="date">{{dateCalc}}</span>
            </div>
            <p>{{email.body}}</p>
            <!-- <router-link to="/email">Back to emails</router-link> -->
        </section>
        <section v-else class="loading">
          <p>Loading...</p>
        </section>
    `,
  data() {
    return {
      email: null,
    };
  },
  created() {
    const id = this.emailId;
    emailService.get(id).then((email) => {
      this.email = email;
      this.email.isRead = true;
      emailService.update(this.email);
    });
  },
  computed: {
    dateCalc() {
      var t = new Date(this.email.sentAt * 1000); // Epoch
      var date = t.getDate() + '/' + (t.getMonth() + 1) + '/' + t.getFullYear();
      return date;
    },
    // carImgUrl() {
    //   return `img/${this.car.vendor}.png`;
    // },
  },
};
