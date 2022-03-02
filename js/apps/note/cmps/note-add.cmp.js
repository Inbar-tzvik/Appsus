export default {
    template: `
    <div class="note-add">
        <input type="text" :placeholder="noteTypeStr" v-model="noteContent">
        <div class="note-add-buttons">
            <button @click="setNoteType('note-text')">text</button>
            <button @click="setNoteType('note-image')">image</button>
            <button @click="setNoteType('note-video')">video</button>
            <button @click="setNoteType('note-todo')">todo</button>
            <button @click="onAddNote()">Add Note</button>
        </div>
    </div>
    `,
    data() {
        return {
            noteType: null,
            noteContent: null
        }
    },
    methods: {
        setNoteType(type){
            this.noteType = type
        },
        onAddNote(){
            if(!this.noteType) this.noteType = 'note-text'
            this.$emit('note-add', {type: this.noteType, content: this.noteContent});
        }
    },
    computed: {
        noteTypeStr(){ 
            if(this.noteType === "text" || !this.noteType) return 'Enter Text Here';
            else if(this.noteType === "image") return 'Enter Image URL Here';
            else if(this.noteType === "video") return 'Enter Video URL Here';
            else return 'Ented Todos Here';

        }
    }
}