import {noteService} from '../services/note-service.js';
import notePreview from '../cmps/note-preview.cmp.js';

export default {
  template: `
        <section v-if="notes" class="notes-main app-main">
           <note-preview :notes="notes"/>
        </section>
    `,
    components: {
      notePreview
    }, 
    data(){
      return{ 
        notes: null
      }
    },
    created(){
      noteService.getNotes()
        .then(notes => this.notes = notes);
    },
  methods: {
  
  },
};
