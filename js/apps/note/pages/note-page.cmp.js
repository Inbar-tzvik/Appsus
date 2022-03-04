import { noteService } from '../services/note-service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';

export default {
  template: `
        <section class="notes-main app-main">
          <note-filter @filter-set="setFilter"/>
          <note-add  @note-add="addNote"/>   
          <div class="note-lists-container" v-if="notes">
            <h1 v-if="pinnedNotes">Pinned:</h1>
            <note-list @note-edit="editNote" v-if="pinnedNotes.length" @note-duplicate="addNote" @note-bcg-change="setNoteBcg" @note-pin="pinNote" @note-remove="removeNote" :notes="pinnedNotes"/>       
            <h1 v-if="pinnedNotes">Others:</h1>
            <note-list @note-edit="editNote" @note-duplicate="addNote" @note-bcg-change="setNoteBcg" @note-pin="pinNote" @note-remove="removeNote" :notes="regularNotes"/>
          </div>
          <router-view :isEditOn="isEditOn" @edit-exit="editOff" @note-edited="loadNotes"></router-view>
          <div v-if="isEditOn" @click="editOff" class="screen-cover"></div>
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
      filter: null,
      isEditOn: false
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
      if (!this.filter || !this.filter.byLabel && !this.filter.byType ) this.notes = notes;
      else {
        if (this.filter.byType) {
          this.notes = notes.filter(note => note.type === this.filter.byType);
          if (this.filter.byLabel) {
            const regex = new RegExp(this.filter.byLabel, 'i');
            this.notes = this.notes.filter(note => (regex.test(note.label)));
          }
        }
        if (this.filter.byLabel) {
          const regex = new RegExp(this.filter.byLabel, 'i');
          this.notes = notes.filter(note => (regex.test(note.label)));
        }
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
    pinNote(id) {
      noteService.pinNote(id)
        .then(() => this.loadNotes())
    },
    setFilter(filter) {
      this.filter = filter;
      this.loadNotes();
    },
    setNoteBcg(note) {
      noteService.setNoteBcg(note)
        .then(() => this.loadNotes());
    },
    editNote(id){
      this.$router.push(`/note/${id}`);
      this.isEditOn = true;
    },
    editOff(){
      this.isEditOn = false;
    }
  },
  computed: {
    regularNotes() {
      return this.notes.filter(note => !note.isPinned);
    },
    pinnedNotes() {
      const notes = this.notes.filter(note => note.isPinned);
      if(!notes.length) return false;
      else return notes 
    }
  }
};
