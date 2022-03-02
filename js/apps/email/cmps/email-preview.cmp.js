import readMore from './email-readMore.cmp.js';

export default {
  props: ['email'],
  template: `
         <td class="email-data"> {{email.from.name}} </td>
        <td class="email-data"> {{email.subject}} - </td>
         <read-more v-bind:txt="email.body"> </read-more>
         <td class="email-data">{{dateCalc}} </td>
           
        
    `,
  data() {
    return {};
  },
  components: {
    readMore,
  },
  created() {},
  methods: {},
  computed: {
    dateCalc() {
      var t = new Date(this.email.sentAt * 1000); // Epoch
      return t.toLocaleString();
    },
  },
};
