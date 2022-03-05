
export default {
    props: ['isBodyFocus'],
    template: `
    <section class="note-add">
        <div class="note-content-inputs">
            <input type="text" placeholder="Enter Label Here" v-model="note.label"/>
            <input type="text" :placeholder="noteTypeStr" v-model="noteContent"/>
        </div>
        <div class="note-type-inputs">
            <input id="add-txt"  name="add-set-type" type="radio" @input="setNoteType('note-txt')" />
            <label for="add-txt"><i class="fa-solid fa-t"></i></label>
            <input id="add-img" name="add-set-type" type="radio" @input="setNoteType('note-img')" />
            <label for="add-img"><i class="fa-solid fa-image"></i></label>
            <input id="add-video" name="add-set-type" type="radio" @input="setNoteType('note-video')" />
            <label for="add-video"><i class="fa-solid fa-video"></i></label>
            <input id="add-todos" name="add-set-type" type="radio" @input="setNoteType('note-todos')" />
            <label for="add-todos"><i class="fa-solid fa-list-ul"></i></label>
        </div>
        <button @click="onAddNote">Add Note</button>
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
            this.setNoteInfo();
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
            else return 'Enter Todo List Items Here (seperated by commas)';
        },
    }
}
