export default {
  template: `
        <section class="note-filter">
            <input type="text" v-model="text" @input="onSetTextFilter">
            <div class="filter-buttons">
              <button @click="onSetFilter('note-txt')">text</button>
              <button @click="onSetFilter('note-img')">image</button>
              <button @click="onSetFilter('note-video')">video</button>
              <button @click="onSetFilter('note-todos')">todo</button>
            </div>
        </section>
    `,
  data() {
    return {
      filter: {
        byType: null,
        byLabel: null
      },
      text: null
    }
  },
  methods: {
    onSetFilter(type) {
      this.filter.byType = type;
      this.sendFilter()
    },
    onSetTextFilter(){
      this.filter.byLabel = this.text;
      this.sendFilter();
    },
    sendFilter() {
      this.$emit('filter-set', this.filter)
    }
  }

}
