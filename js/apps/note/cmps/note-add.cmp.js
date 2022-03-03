export default {
    props: ['isBodyFocus'],
    template: `
    <section class="note-add">
        <div class="note-content-inputs">
            <input type="text" placeholder="Enter Label Here" v-model="note.label"/>
            <input type="text" :placeholder="noteTypeStr" v-model="noteContent"/>
        </div>
        <div class="note-type-inputs">
            <input label="Text"  name="set-type" type="radio" @input="setNoteType('note-txt')" />
            <input label="Image" name="set-type" type="radio" @input="setNoteType('note-img')" />
            <input label="Video" name="set-type" type="radio" @input="setNoteType('note-video')" />
            <input label="Todos" name="set-type" type="radio" @input="setNoteType('note-todos')" />
        </div>
        <button @click="onAddNote()">Add Note</button>
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
        }
    },
    computed: {
        noteTypeStr() {
            if (this.note.type === 'note-txt' || !this.note.type) return 'Enter Text Here';
            else if (this.note.type === 'note-img') return 'Enter Image URL Here';
            else if (this.note.type === 'note-video') return 'Enter Video URL Here';
            else return 'Enter Todo List Items Here';
        },
    }
}
