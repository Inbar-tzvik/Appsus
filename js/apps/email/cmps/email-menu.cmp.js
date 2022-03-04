export default {
  props: ['emails'],
  template: `
          <section class="email-menu">
          <div @click="compose"><i class="fa-solid fa-plus fa-2x"></i> compose</div>
              <p v-bind:class="{'inbox-red':inboxRed}" data-hover="Inbox" @click="setFilter('inbox')" to="/email"> <i class="fa-solid fa-inbox"></i> Inbox ({{unreadEmails}})</p>
              <p data-hover="Starred" @click="setFilter('stared')" > <i class="fa-solid fa-star"></i>   Starred</p>
              <p data-hover="Sent" @click="setFilter('sent')" ><i class="fa-solid fa-paper-plane"></i>   Sent</p>
          </section>
      `,
  data() {
    return {
      status: 'inbox',
      inboxRed: true,
    };
  },
  created() {},
  methods: {
    compose() {
      this.$router.push(`/email/compose`);
    },

    setFilter(value) {
      this.inboxRed = value !== 'inbox' ? false : true;
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
