import emailPreview from './email-preview.cmp.js';

export default {
  props: ['emails'],
  template: `
        
      <section class="email-list">
        <ul>
              <li v-for="email in emails" :key="email.id"  >
              <email-preview :email="email"  @remove="remove" @show="show" @changeState="change" ></email-preview>
               </li>
        </ul>
        </section> 
    `,

  components: {
    emailPreview,
  },
  methods: {
    change() {
      this.$emit('changeState');
    },
    show(id) {
      this.$emit('show', id);
      console.log('my id is', id);
    },
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
