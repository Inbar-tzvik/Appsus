import emailPreview from './email-preview.cmp.js';

export default {
  props: ['emails'],
  template: `
        <section >
            <ul class="emails">
                <li v-for="email in emails" :key="email.id" class="email-list" >
                   <email-preview :email="email" />
                   <div class="actions">
                       <button @click="remove(email.id)">X</button>
                    
                   </div>
                </li>
            </ul>
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
