import noteTxt from "./note-txt.cmp.js";
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['note'],
    template: `
    <div @click="isColorOptions = false" class="note-card-content" :class="{'card-hover': isHover}" :style="{backgroundColor: noteBcg}" @mouseover="toggleHover(true)" @mouseleave="toggleHover(false)">
         <button class="note-delete" @click="onRemoveNote"><i class="fa-solid fa-trash-can"></i></button>     
         <button class="note-pin" @click="onPinNote"><i :class="isPinned"></i></button>
        <h3 class="note-label">{{note.label}}</h3>
        <component :is="note.type" :info="note.info"/>
        <div class="note-preview-edit">
            <button class="duplicate-btn" @click="onDuplicateNote"><i class="fa-solid fa-clone"></i></button>
            <button class="color-btn" @click.stop="isColorOptions=true"><i class="fa-solid fa-palette"></i></button>
            <button class="edit-btn" @click="onEditNote"><i class="fa-solid fa-pen-to-square"></i></button>
            <div v-if="isColorOptions" class="color-options">
                <button class="default-btn" @click="isColorOptions=false" @click="onSetBcg('white')"><i class="fa-solid fa-droplet-slash"></i></button>
                <button style="background-color: #f28b82" @click="isColorOptions=false" @click="onSetBcg('#f28b82')"></button> 
                <button style="background-color: #fbbc04" @click="isColorOptions=false" @click="onSetBcg('#fbbc04')"></button> 
                <button style="background-color: #fff475" @click="isColorOptions=false" @click="onSetBcg('#fff475')"></button> 
                <button style="background-color: #ccff90" @click="isColorOptions=false" @click="onSetBcg('#ccff90')"></button> 
                <button style="background-color: #a7ffeb" @click="isColorOptions=false" @click="onSetBcg('#a7ffeb')"></button> 
                <button style="background-color: #cbf0f8" @click="isColorOptions=false" @click="onSetBcg('#cbf0f8')"></button> 
                <button style="background-color: #aecbfa" @click="isColorOptions=false" @click="onSetBcg('#aecbfa')"></button> 
                <button style="background-color: #d7aefb" @click="isColorOptions=false" @click="onSetBcg('#d7aefb')"></button> 
                <button style="background-color: #fdcfe8" @click="isColorOptions=false" @click="onSetBcg('#fdcfe8')"></button> 
                <button style="background-color: #e6c9a8" @click="isColorOptions=false" @click="onSetBcg('#e6c9a8')"></button> 
                <button style="background-color: #e8eaed" @click="isColorOptions=false" @click="onSetBcg('#e8eaed')"></button>  
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
        },
        onEditNote(){
            this.$emit('note-edit', this.note.id)
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