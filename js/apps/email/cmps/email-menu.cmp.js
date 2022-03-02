export default {
  template: `
          <section class="email-menu">

              <p @click="setFilter('inbox')">Inbox</p>
              <p @click="setFilter('stared')" >Starred</p>
              <p @click="setFilter('sent')" > Sent mail</p>
          </section>
      `,
  data() {
    return {
      status: 'inbox',
    };
  },
  created() {},
  methods: {
    setFilter(value) {
      this.status = value;
      console.log(this.status);
      this.$emit('filtered', this.status);
    },
  },
  computed: {},
};
