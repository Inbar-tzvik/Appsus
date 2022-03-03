export default {
  template: `
        <section class="email-filter">
            <label>
            Search
            <input ref="vendorInput" v-model="filter.txt"
            @input="setFilterTxtRead" type="text" v-model="txt" placeholder="Search...">
            </label>
            <select v-model="filter.isRead" @change="setFilterTxtRead">
                <option value=1>All</option>
                <option value="true">Read</option>
                <option value="false">Unread</option>
             </select>
        </section>
      
    `,
  data() {
    return {
      filter: {
        txt: '',
        isRead: '1',
      },
    };
  },

  methods: {
    value() {
      console.log(ev.selecte);
    },
    setFilterTxtRead() {
      this.$emit('filteredTxtRead', this.filter);
    },
  },
};
