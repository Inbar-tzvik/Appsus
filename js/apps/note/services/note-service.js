import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

export const noteService = {
    getNotes
}

const NOTES_KEY = 'NOTES'

function getNotes(){
    return storageService.query(NOTES_KEY)
            .then(res => {
                if(!res || !res.length){
                    return _createNotes();
                } 
                else return res; 
            })
    
}

function _createNotes(){
    const notes = [];
    notes.push(_createNote('note-txt', false, {txt:'Note'}));
    notes.push(_createNote('note-txt', false, {txt:'Note'}));
    notes.push(_createNote('note-txt', false, {txt:'Note'}));
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