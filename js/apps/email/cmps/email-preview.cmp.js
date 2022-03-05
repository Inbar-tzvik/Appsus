// import readMore from './email-readMore.cmp.js';
import { emailService } from '../services/email-service.js';

export default {
  props: ['email'],
  template: `
  <!-- <section class="email-all" > -->
       <section v-bind:class="{'email-read':email.isRead}" class="email-preview-row email-all" @mouseleave="hideButtons" @mouseover="showButtons"  >
          <span  @click="showAll(email.id)" class="sendfrom" v-bind:class="{'email-read-content':!email.isRead}"> {{email.from.name}} </span>
          <span  @click="showAll(email.id)" class="mail-content" > <span v-bind:class="{'email-read-content':!email.isRead}"> {{email.subject}} - </span>
          <span @click="showAll(email.id)"> {{displayTxt}}</span></span>
          <!-- <read-more v-bind:txt="email.body"> </read-more> -->
          <!-- <section  @mouseleave="hideButtons" @mouseover="showButtons"> -->
            <span class="date-remove" v-if="!buttons" v-bind:class="{'email-data':!email.isRead }">{{dateCalc}} </span>
            <div class="date-remove"v-if="buttons">
                <span class="delete" data-hover="Delete" @click="remove(email.id)"> <i class="fa-solid fa-trash"></i></span> 
                <span class="unread" data-hover="Mark as unread" @click="updateReadState" v-if="email.isRead" ><i class="fa fa-envelope"></i></span>
                <span class="read" data-hover="Mark as read" @click="updateReadState" v-if="!email.isRead" ><i class="fa-solid fa-envelope-open"></i></span>
            <div>
          </section>
<!-- </section> -->
    `,
  data() {
    return {
      // show: false,
      buttons: false,
    };
  },
  components: {
    // readMore,
  },
  created() {},
  methods: {
    showAll(id) {
      this.$emit('show', id);
      // this.$router.push(`/email/${this.email.id}`);
      // this.show = !this.show;
    },

    remove(id) {
      this.$emit('remove', id);
    },
    hideButtons() {
      this.buttons = false;
    },
    showButtons() {
      this.buttons = true;
    },
    updateReadState() {
      this.email.isRead = !this.email.isRead;
      emailService.update(this.email);
      this.$emit('changeState');
    },
  },
  computed: {
    displayTxt() {
      if (this.email.body.length > 100) {
        return this.email.body.slice(0, 100);
      } else {
        return this.email.body;
      }
    },
    dateCalc() {
      var t = new Date(this.email.sentAt * 1000); // Epoch
      var date = t.getDate() + '/' + (t.getMonth() + 1) + '/' + t.getFullYear();
      return date;
    },
  },
};

//  < email-details>
// @click="showAll"

{
  /* <section @mouseleave="hideButtons" @mouseover="showButtons"> */
}

// emailService.update(this.email);
