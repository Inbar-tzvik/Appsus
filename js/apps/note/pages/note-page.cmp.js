import { noteService } from '../services/note-service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';

export default {
  template: `
        <section class="notes-main app-main">
            <note-filter @filter-set="setFilter"/>
            <note-add @note-add="addNote"/>   
            <div v-if="notes">
              <note-list @note-bcg-change="setNoteBcg" @note-pin="pinNote" @note-remove="removeNote" :notes="pinnedNotes"/>       
              <note-list @note-bcg-change="setNoteBcg" @note-pin="pinNote" @note-remove="removeNote" :notes="regularNotes"/>
            </div>
        </section>
    `,
  components: {
    noteFilter,
    noteAdd,
    noteList
  },
  data() {
    return {
      notes: null,
      filter: null
    }
  },
  created() {
    noteService.query()
      .then(notes => this.notes = notes);
  },
  methods: {
    loadNotes() {
      noteService.query()
        .then(notes => {
          this.filterNotes(notes);
        });
    },
    filterNotes(notes) {
      if (!this.filter) this.notes = notes;
      else {
        console.log(this.filter);
        this.notes = notes.filter(note => this.filter === note.type)
      }
    },
    addNote(note) {
      noteService.addNote(note)
        .then(() => this.loadNotes())
    },
    removeNote(id) {
      noteService.removeNote(id)
        .then(() => this.loadNotes());
    },
    pinNote(id){
      noteService.pinNote(id)
        .then(() => this.loadNotes())
    },
    setFilter(filter) {
      this.filter = filter;
      this.loadNotes();
    },
    setNoteBcg(note){
      noteService.setNoteBcg(note)
        .then(() => this.loadNotes());
    }
  },
  computed :{
    regularNotes(){
      return this.notes.filter(note => !note.isPinned);
    },
    pinnedNotes(){
      return this.notes.filter(note => note.isPinned);
    }
  }
};
