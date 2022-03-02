import { noteService } from '../services/note-service.js';
import notePreview from '../cmps/note-preview.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';

export default {
  template: `
        <section class="notes-main app-main">
            <note-add @note-add="addNote"/>          
            <note-preview :notes="notes"/>
        </section>
    `,
  components: {
    notePreview,
    noteAdd
  },
  data() {
    return {
      notes: null
    }
  },
  created() {
    noteService.getNotes()
      .then(notes => this.notes = notes);
  },
  methods: {
    loadNotes(){
      noteService.getNotes()
      .then(notes => this.notes = notes);
    },
    addNote(note){
      noteService.addNote(note)
        .then(() => this.loadNotes())
    }
  },
};
