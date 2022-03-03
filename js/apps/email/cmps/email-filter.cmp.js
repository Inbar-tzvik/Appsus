export default {
  template: `
        <section class="email-filter">
            <label>
            Search
            <input ref="vendorInput" @input="setFilterTxt" type="text" v-model="txt" placeholder="Search...">
            </label>
            <datalist>
        </section>
    `,
  data() {
    return {
      txt: '',
    };
  },
  mounted() {
    // this.$refs.vendorInput.focus()
  },
  methods: {
    setFilterTxt() {
      this.$emit('filteredTxt', this.txt);
    },
  },
};
