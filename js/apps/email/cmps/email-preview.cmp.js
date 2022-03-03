import readMore from './email-readMore.cmp.js';

export default {
  props: ['email'],
  template: `
       <div @mouseleave="hideButtons" @mouseover="showButtons"  @click="showAll">
         <td class="email-data"> {{email.from.name}} </td>
         <td class="email-data"> {{email.subject}} - </td>
          <read-more v-bind:txt="email.body"> </read-more>
         <td v-if="!buttons" class="email-data">{{dateCalc}} </td>
         <td v-if="buttons" @click="remove(email.id)"> X</td>
         
         </div>
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
      var date = t.getDate() + '/' + t.getMonth() + '/' + t.getFullYear();
      return date;
    },
  },
};

//  < email-details>
// @click="showAll"

{
  /* <section @mouseleave="hideButtons" @mouseover="showButtons"> */
}
