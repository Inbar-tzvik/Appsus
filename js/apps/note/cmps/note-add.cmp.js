export default {
    template: `
    <section class="note-add">
        <div class="note-content-inputs">
            <input v-if="isInputFocus"  type="text" placeholder="Enter Label Here" v-model="note.label">
            <input @focus="isInputFocus=true" type="text" :placeholder="noteTypeStr" v-model="noteContent">
        </div>
        <div class="note-type-inputs">
            <input type="radio" name="set-type" @input="setNoteType('note-txt')" id="text-input">
            <label name="set-type" for="text-input">Text</label>
            <input name="set-type" type="radio" @input="setNoteType('note-img')" id="img-input">
            <label name="set-type" for="img-input">Image</label>
            <input name="set-type" type="radio" @input="setNoteType('note-video')" id="video-input">
            <label name="set-type" for="video-input">Video</label>
            <input name="set-type" type="radio" @input="setNoteType('note-todos')" id="todos-input">
            <label name="set-type" for="todos-input">Todo</label>
            <button @click="onAddNote()">Add Note</button>
        </div>
    </section>
    `,
    data() {
        return {
            noteContent: null,
            note: {
                label: null,
                type: 'note-txt',
                info: null
            },
            isInputFocus: false
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
            else if (this.note.type === 'note-todos') {
                const todoStrings = this.noteContent.split(',');
                const todoItems = todoStrings.map(item => ({ txt: item }))
                this.note.info = {
                    todos: todoItems
                }
            }
        },
        computed: {
            noteTypeStr() {
                if (this.note.type === "note-txt" || !this.note.type) return 'Enter Text Here';
                else if (this.note.type === "note-img") return 'Enter Image URL Here';
                else if (this.note.type === "note-video") return 'Enter Video URL Here';
                else 'Enter Todo List Items Here';
            },
        },
    }
}