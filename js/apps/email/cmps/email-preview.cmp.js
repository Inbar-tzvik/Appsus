import readMore from './email-readMore.cmp.js';

export default {
  props: ['email'],
  template: `
  <section class="email-all" >
       <section class="email-preview-row " @mouseleave="hideButtons" @mouseover="showButtons"  @click="showAll">
          <span class="sendfrom" v-bind:class="{'email-data':!email.isRead}"> {{email.from.name}} </span>
        <span class="mail-content">
          <span  v-bind:class="{'email-data':!email.isRead}"> {{email.subject}} - </span>
          <span> {{email.body}}</span>
          <!-- <read-more v-bind:txt="email.body"> </read-more> -->
        </span>
        </section>
         <span @mouseleave="hideButtons" @mouseover="showButtons">
             <span v-if="!buttons" v-bind:class="{'email-data':!email.isRead}">{{dateCalc}} </span>
             <span v-if="buttons" @click="remove(email.id)"> X</span>    
</span>
</section>
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
