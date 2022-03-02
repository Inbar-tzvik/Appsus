export default {
    template: `
    <section class="note-add">
        <input type="text" :placeholder="noteTypeStr" v-model="noteContent">
        <div class="note-add-buttons">
            <button @click="setNoteType('note-txt')">text</button>
            <button @click="setNoteType('note-img')">image</button>
            <button @click="setNoteType('note-video')">video</button>
            <button @click="setNoteType('note-todos')">todo</button>
            <button @click="onAddNote()">Add Note</button>
        </div>
    </section>
    `,
    data() {
        return {
            noteContent: null,
            note: {
                type: 'note-text',
                info: null
            }
        }
    },
    methods: {
        setNoteType(type) {
            this.note.type = type;

        },
        onAddNote() {
            this.setNoteInfo()
            this.$emit('note-add', this.note);
        },
        setNoteInfo() {
            if (this.note.type === 'note-txt') this.note.info = { txt: this.noteContent };
            else if (this.note.type === 'note-img' || this.note.type === "note-video") this.note.info = { url: this.noteContent };
            else if(this.note.type === 'note-todos') this.note.info = {label: this.noteContent}

        }
    },
    computed: {
        noteTypeStr() {
            if (this.note.type === "note-txt" || !this.note.type) return 'Enter Text Here';
            else if (this.note.type === "note-img") return 'Enter Image URL Here';
            else if (this.note.type === "note-video") return 'Enter Video URL Here';
            else return 'Enter Todo List Label Here';

        },
    }
}