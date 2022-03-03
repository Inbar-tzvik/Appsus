import readMore from './email-readMore.cmp.js';

export default {
  props: ['email'],
  template: `
  <!-- <section class="email-all" > -->
       <section v-bind:class="{'email-read':email.isRead}" class="email-preview-row email-all" @mouseleave="hideButtons" @mouseover="showButtons"  >
          <span  @click="showAll" class="sendfrom" > {{email.from.name}} </span>
          <span  @click="showAll" class="mail-content" > {{email.subject}} - 
          <span @click="showAll"> {{displayTxt}}</span></span>
          <!-- <read-more v-bind:txt="email.body"> </read-more> -->
          <!-- <section  @mouseleave="hideButtons" @mouseover="showButtons"> -->
            <span class="date-remove" v-if="!buttons" v-bind:class="{'email-data':!email.isRead }">{{dateCalc}} </span>
            <span  class="date-remove"v-if="buttons" @click="remove(email.id)"> X</span>    
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
    readMore,
  },
  created() {},
  methods: {
    showAll() {
      this.$router.push(`/email/${this.email.id}`);
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
