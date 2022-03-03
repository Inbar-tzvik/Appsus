import noteTxt from "./note-txt.cmp.js";
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['note'],
    template: `
    <div :style="{backgroundColor: noteBcg}" @mouseover="toggleHover(true)" @mouseleave="toggleHover(false)">
        <div :style="{visibility: isHover ? 'visible' : 'hidden' }">
            <button @click="onRemoveNote">X</button>
            <button @click="onPinNote">{{isPinned}}</button>
            <button @click="onDuplicateNote">Duplicate</button>
        </div>
        <h3>{{note.label}}</h3>
        <component :is="note.type" :info="note.info"/>
        <input :style="{visibility: isHover ? 'visible' : 'hidden' }" type="color" v-model="bcgToSet" @input="onSetBcg">
    </div>
    `,
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos
    },
    data(){
        return{
            isHover: false,
            bcgToSet: null        }
    },
    methods: {
        onRemoveNote() {
            this.$emit('note-remove', this.note.id);
        },
        onPinNote(){
            this.$emit('note-pin', this.note.id)
        },
        onDuplicateNote(){
            this.$emit('note-duplicate', this.note)
        },
        toggleHover(isHover){
            this.isHover = isHover
        },
        onSetBcg(){
            console.log(this.bcgToSet);
            this.$emit('note-bcg-change', {id: this.note.id, color: this.bcgToSet})
        }
    },
    computed:{
        isPinned(){
            if(this.note.isPinned) return 'Unpin';
            else return 'Pin'
        },
        noteBcg(){
            if(!this.note.style) return 'white';
            else return this.note.style.bcg
        }
    },
}