import { noteService } from "../services/note-service.js"

export default {
    template: `
    <section v-if="note" class="note-edit">
        <button @click="onEditExit"><i class="fa-solid fa-circle-xmark"></i></button>
        <input type="text" v-model="note.label" @input="onSetNoteLabel">
        <input type="text" v-model="noteContent" @input="onSetNoteContent">
    </section>
    `,
    data() {
        return {
            note: null,
            noteContent: null
        }
    },
    methods: {
        getNoteContent(note) {
            if (note.type === 'note-txt') this.noteContent = note.info.txt;
            else if (note.type === 'note-img' || note.type === 'note-video') this.noteContent = note.info.url;
        },
        onSetNoteLabel(){
            noteService.editNote(this.note)
                .then(() => this.$emit('note-edited'))
        },
        onSetNoteContent(){
            if(this.note.type === 'note-txt') this.note.info.txt = this.noteContent; 
            else if(this.note.type === 'note-img' || this.note.type === 'note-video') this.note.info.url = this.noteContent;
            noteService.editNote(this.note)
                .then(() => this.$emit('note-edited'))
        },
        onEditExit(){
            this.$router.push('/note');
        }
    },
    watch: {
        '$route.params.noteId': {
            handler() {
                const noteId = this.$route.params.noteId
                noteService.getNoteById(noteId)
                    .then(note => this.note = note)
                    .then(note => this.getNoteContent(note))
            }, immediate: true
        }
    }
}