export default {
  props: ['emails'],
  template: `
          <section class="email-menu">
          <h3 @click="compose">+ compose</h3>
              <p @click="setFilter('inbox')">Inbox({{unreadEmails}})</p>
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
    compose() {
      this.$router.push(`/email/compose`);
    },

    setFilter(value) {
      this.status = value;
      console.log(this.status);
      this.$emit('filtered', this.status);
    },
  },
  computed: {
    unreadEmails() {
      console.log(this.emails);
      var count = 0;
      this.emails.forEach((email) => {
        if (!email.isRead) count++;
      });
      if (count === 0) return '';
      else return count;
    },
  },
};
