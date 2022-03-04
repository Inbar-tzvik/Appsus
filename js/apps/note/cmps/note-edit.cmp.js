import { noteService } from "../services/note-service.js"
import { utilService } from "../../../services/util-service.js";
export default {
    props: ['isEditOn'],
    template: `
    <section v-if="isEditOn" class="note-edit">
        <button  @click="onEditExit"><i class="fa-solid fa-circle-xmark"></i></button>
        <input type="text" v-model="note.label" placeholder="Label" @input="onSetNoteLabel">
        <input v-if="note.type !== 'note-todos'" type="text" :placeholder="contentPlaceholder" v-model="noteContent" @input="onSetNoteContent">
        <ul class="note-edit-todos" v-if="note.type === 'note-todos'">
            <li class="note-edit-todo" v-for="todo in note.info.todos">
               <input type="text" @input="onSetNoteContent" v-model="todo.txt">
               <button class="delete-todo-btn" @click="onDeleteTodo(todo.id)">X</button> 
            </li>
            <button @click="onAddTodo">+</button>
        </ul>
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
        onSetNoteLabel() {
            noteService.editNote(this.note)
                .then(() => this.$emit('note-edited'))
        },
        onSetNoteContent() {
            if (this.note.type === 'note-txt') this.note.info.txt = this.noteContent;
            else if (this.note.type === 'note-img' || this.note.type === 'note-video') this.note.info.url = this.noteContent;
            noteService.editNote(this.note)
                .then(() => this.$emit('note-edited'))
        },
        onDeleteTodo(id) {
            const todoIdx = this.note.info.todos.findIndex(todo => todo.id === id);
            this.note.info.todos.splice(todoIdx, 1);
            this.onSetNoteContent();
        },
        onAddTodo() {
            this.note.info.todos.push({ txt: 'todo', id: utilService.makeId() })
            this.onSetNoteContent();
        },
        onEditExit() {
            this.$router.push('/note');
            this.$emit('edit-exit')
        }
    },
    computed: {
        contentPlaceholder() {
            if (this.note.type === 'note-txt') return 'Text';
            else if (this.note.type === 'note-img') return 'Image URL'
            else return 'Video URL'
        }
    },
    watch: {
        '$route.params.noteId': {
            handler() {
                const noteId = this.$route.params.noteId
                noteService.getNoteById(noteId)
                    .then(note => this.note = note)
                    .then(note => { 
                        this.getNoteContent(note);
                        this.isEditOn = true;
                    })

            }, immediate: true
        }
    }
}