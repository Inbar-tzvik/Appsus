import noteTxt from "./note-txt.cmp.js";
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['note'],
    template: `
    <div @click="isColorOptions = false" class="note-card-content" :class="{'card-hover': isHover}" :style="{backgroundColor: noteBcg}" @mouseover="toggleHover(true)" @mouseleave="toggleHover(false)">
         <button class="note-delete" @click="onRemoveNote"><i class="fa-solid fa-circle-xmark"></i></button>     
        <h3>{{note.label}}</h3>
        <component :is="note.type" :info="note.info"/>
        <div class="note-preview-edit">
            <button @click="onPinNote"><i :class="isPinned"></i></button>
            <button @click="onDuplicateNote"><i class="fa-solid fa-clone"></i></button>
            <div v-if="isColorOptions" class="color-options">
                <button class="red-btn" @click="isColorOptions=false" @click="onSetBcg('red')"></button> 
                <button class="blue-btn" @click="isColorOptions=false" @click="onSetBcg('blue')"></button> 
                <button class="grey-btn" @click="isColorOptions=false" @click="onSetBcg('grey')"></button> 
                <button class="aqua-btn" @click="isColorOptions=false" @click="onSetBcg('aqua')"></button> 
            </div>
            <button @click.stop="isColorOptions=true"><i class="fa-solid fa-palette"></i></button>
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
            isColorOptions: false
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
        onSetBcg(bcg) {
            this.$emit('note-bcg-change', { id: this.note.id, color: bcg })
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