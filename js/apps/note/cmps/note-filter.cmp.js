export default {
  template: `
        <section class="note-filter">
            <input type="text" v-model="text" @input="onSetTextFilter">
            <div class="filter-type-inputs">
              <input id="txt" name="set-type" type="radio" @input="onSetFilter('note-txt')" >
              <label for="txt"><i class="fa-solid fa-t"></i></label>
              <input id="img" name="set-type" type="radio" @input="onSetFilter('note-img')" >
              <label for="img"><i class="fa-solid fa-image"></i></label>
              <input id="video" name="set-type" type="radio" @input="onSetFilter('note-video')" >
              <label for="video"><i class="fa-solid fa-video"></i></label>
              <input id="todos" name="set-type" type="radio" @input="onSetFilter('note-todos')" >
              <label for="todos"><i class="fa-solid fa-list-ul"></i></label>
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
  },
  computed: {
    
  }

}
