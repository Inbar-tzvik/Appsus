export default {
  props: ['email'],
  template: `
        <section class="email-preview">
            <p>{{email.from.name}}</p>
            <p> {{email.subject}}</p>
        </section>
    `,
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
};
