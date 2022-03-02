import noteTxt from "./note-txt.cmp.js";
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['notes'],
    template: `
    <section v-if="notes" class="notes-preview-container">
            <div v-for="note in notes" :key="note.id" class="note-card">
                <button @click="onRemoveNote(note.id)">X</button>
                <button @click="onPinNote(note.id)">pin</button>
                <component :is="note.type" :info="note.info"/>
            </div>
    </section>
    `,
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos
    },
    methods: {
        onRemoveNote(id) {
            this.$emit('note-remove', id);
        },
        onPinNote(id){
            
        }
    }


}