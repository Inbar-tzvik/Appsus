import noteTxt from "./note-txt.cmp.js";
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';
export default {
    props: ['notes'],
    template: `
    <section class="notes-preview-container">
        <div class="note-card">
            <component v-for="note in notes" :is="note.type" :info="note.info">
       </div>
    </section>
    `,
    components:{
        noteTxt,
        noteImg,
        noteVideo,
        noteTxt
    },

}