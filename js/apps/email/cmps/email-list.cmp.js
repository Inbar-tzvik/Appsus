import emailPreview from './email-preview.cmp.js';

export default {
  props: ['emails'],
  template: `
        
        <table>
            <tr v-for="email in emails" :key="email.id" class="email-list"  >
              <email-preview :email="email"  @remove="remove"></email-preview>
           </tr>
        </table> 
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

{
  /* <table>
<tr v-for="email in emails" :key="email.id" class="email-list">
  <email-preview   :email="email" @mouseleave="hideButtons" @mouseover="showButtons" :buttons="buttons" @remove="remove"></email-preview>
</tr>
</table>  */
}
