import emailPreview from './email-preview.cmp.js';

export default {
  props: ['emails'],
  template: `
        <section>
        <table>
            <tr v-for="email in emails" :key="email.id" class="email-list">
              <email-preview :email="email"></email-preview>
           </tr>
        </table> 
        </section>
    `,
  components: {
    emailPreview,
  },
  methods: {
    remove(id) {
      this.$emit('remove', id);
    },
    select(car) {
      this.$emit('selected', car);
    },
  },
  computed: {},
};
