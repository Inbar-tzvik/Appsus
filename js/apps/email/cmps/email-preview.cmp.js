import readMore from './email-readMore.cmp.js';

export default {
  props: ['email'],
  template: `
        <section class="email-preview">
            <p>{{email.from.name}}</p>
            <p> {{email.subject}} - </p>
            <read-more v-bind:txt="email.body"> </read-more>
           
        </section>
    `,
  data() {
    return {};
  },
  components: {
    readMore,
  },
  created() {},
  methods: {},
  computed: {},
};
