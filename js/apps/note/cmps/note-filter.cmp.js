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
      filter: null,
      text: null
    }
  },
  methods: {
    onSetFilter(type) {
      this.filter = type;
      this.sendFilter()
    },
    onSetTextFilter(){
      switch(this.text){
        case 'text': 
        case 'Text':
          this.filter = 'note-txt'; 
          break;
        case 'image': 
        case 'Image':
          this.filter = 'note-img'; 
          break;
        case 'video': 
        case 'Video':
          this.filter = 'note-video'; 
          break;
        case 'todos': 
        case 'Todos':
          this.filter = 'note-todos'; 
          break;
        default: 
        this.filter = null;
      }
      this.sendFilter();
    },
    sendFilter() {
      this.$emit('filter-set', this.filter)
    }
  }

}
