import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

export const noteService = {
    query,
    addNote,
    removeNote,
    pinNote,
    setNoteBcg
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

function setNoteBcg({id, color}){
    return query()
            .then(notes=> {
                const noteToColor = notes.find(note => note.id === id);
                noteToColor.style = {bcg: color};
                return storageService.put(NOTES_KEY, noteToColor)
            })
}

function pinNote(id){
   return query()
        .then(notes => {
            const noteToPin = notes.find(note => note.id === id);
            noteToPin.isPinned = !noteToPin.isPinned; 
            return storageService.put(NOTES_KEY, noteToPin)
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