import noteTxt from "./note-txt.cmp.js";
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['note'],
    template: `
    <div class="note-card-content" :style="{backgroundColor: noteBcg}" @mouseover="toggleHover(true)" @mouseleave="toggleHover(false)">
    <button :style="{visibility: isHover ? 'visible' : 'hidden' }" @click="onRemoveNote"><i class="fa-solid fa-circle-xmark"></i></button>     
        <h3>{{note.label}}</h3>
        <component :is="note.type" :info="note.info"/>
        <div :style="{visibility: isHover ? 'visible' : 'hidden' }" class="note-preview-edit">
            <button @click="onPinNote"><i :class="isPinned"></i></button>
            <button @click="onDuplicateNote"><i class="fa-solid fa-clone"></i></button>
            <div class="color-input-container">
                <label for="color-input"><i class="fa-solid fa-palette"></i></label>
                <input id="color-input" type="color" v-model="bcgToSet" @input="onSetBcg">
            </div>
        </div>
    </div>
    `,
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos
    },
    data() {
        return {
            isHover: false,
            bcgToSet: null
        }
    },
    methods: {
        onRemoveNote() {
            this.$emit('note-remove', this.note.id);
        },
        onPinNote() {
            this.$emit('note-pin', this.note.id)
        },
        onDuplicateNote() {
            this.$emit('note-duplicate', this.note)
        },
        toggleHover(isHover) {
            this.isHover = isHover
        },
        onSetBcg() {
            console.log(this.bcgToSet);
            this.$emit('note-bcg-change', { id: this.note.id, color: this.bcgToSet })
        }
    },
    computed: {
        isPinned() {
            if (this.note.isPinned) return 'fa-solid fa-minus';
            else return 'fa-solid fa-thumbtack';
        },
        noteBcg() {
            if (!this.note.style) return 'white';
            else return this.note.style.bcg
        }
    }
}