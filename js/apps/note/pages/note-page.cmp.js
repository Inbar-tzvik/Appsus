import { noteService } from '../services/note-service.js';
import notePreview from '../cmps/note-preview.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';

export default {
  template: `
        <section class="notes-main app-main">
            <note-filter @filter-set="setFilter"/>
            <note-add @note-add="addNote"/>          
            <note-preview @note-remove="removeNote" :notes="notes"/>
        </section>
    `,
  components: {
    noteFilter,
    noteAdd,
    notePreview
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
          this.filterNotes(notes)
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
    setFilter(filter) {
      this.filter = filter;
      this.loadNotes();
    }
  },

};
