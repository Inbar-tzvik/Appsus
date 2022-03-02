import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

export const noteService = {
    query,
    addNote,
    removeNote
}

const NOTES_KEY = 'NOTES'

function query(){
    return storageService.query(NOTES_KEY)
            .then(res => {
                if(!res || !res.length){
                    return _createNotes();
                } 
                else return res; 
            })   
}

function addNote(noteData){
    const note = _createNote(noteData.type, false, noteData.info)
    return storageService.post(NOTES_KEY, note);
          
}

function removeNote(id){
    return storageService.remove(NOTES_KEY, id);
}

function _createNotes(){
    const notes = [];
    notes.push(_createNote('note-txt', false, {txt:'Note Text'}));
    notes.push(_createNote('note-txt', false, {txt:'What am I writing here'}));
    notes.push(_createNote('note-txt', false, {txt:'Programming is like sex'}));
    return Promise.resolve(notes)

}

function _createNote(type, isPinned, info){
    return {
        id: utilService.makeId,
        type,
        isPinned,
        info
    }
}