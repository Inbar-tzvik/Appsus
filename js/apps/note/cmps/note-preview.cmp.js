import noteTxt from "./note-txt.cmp.js";
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['notes'],
    template: `
    <section v-if="notes" class="notes-preview-container">
            <component v-for="note in notes" :is="note.type" :info="note.info">
    </section>
    `,
    components:{
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos
    },
    watch: {
        notes(newNotes){
            console.log(newNotes);
        }
    }

}