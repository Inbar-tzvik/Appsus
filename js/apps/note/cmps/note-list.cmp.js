
import notePreview from "./note-preview.cmp.js";
export default {
    props: ['notes'],
    template: `
    <section v-if="notes" class="notes-list">
            <div v-for="note in notes" :key="note.id" class="note-card">
                <note-preview 
                @note-duplicate="onDuplicateNote" 
                :note="note" 
                @note-remove="onRemoveNote" 
                @note-pin="onPinNote" 
                @note-edit="onEditNote"
                @note-bcg-change="onSetBcg"/>
            </div>
    </section>
    `,

    components: {
        notePreview
    },
    methods: {
        onRemoveNote(id) {
            this.$emit('note-remove', id);
        },
        onPinNote(id){
            this.$emit('note-pin', id)
        },
        onSetBcg(note){
            this.$emit('note-bcg-change', note)
        },
        onDuplicateNote(note){
            console.log(note);
            this.$emit('note-duplicate', note)
        },
        onEditNote(id){
            this.$emit('note-edit', id)
        }
    },
   


}