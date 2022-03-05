import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

export const noteService = {
    query,
    getNoteById,
    addNote,
    removeNote,
    pinNote,
    setNoteBcg,
    editNote
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

function getNoteById(id){
    return storageService.get(NOTES_KEY, id);
}

function setNoteBcg({id, color}){
    console.log(color);
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
    console.log(noteData);
    const note = _createNote(noteData, false)
    return storageService.post(NOTES_KEY, note);  
}

function editNote(note){
    return storageService.put(NOTES_KEY, note)
}

function removeNote(id){
    return storageService.remove(NOTES_KEY, id);
}

function _createNotes(){
    const notes = [];
    notes.push(_createNote({label: 'Note',style: {bcg: '#e8eaed'}, type: 'note-txt', info: {txt:'This is a note'}}, false));
    notes.push(_createNote({label: 'You can change my color!',style:{bcg: '#a7ffeb'}, type: 'note-txt', info: {txt:'Try pressing the color option when you hover me!'}}, false));
    notes.push(_createNote({label: 'You can add pictures', style:{bcg:'#e6c9a8'}, type: 'note-img', info: {url:'https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80'}}, false));
    notes.push(_createNote({label: 'You can pin notes', type: 'note-txt',style:{bcg:'#f28b82'}, info: {txt:'Look at me, I\'m pinned!'}}, true));
    notes.push(_createNote({label: 'Try all the features!', style:{bcg:'#fff475'}, type: 'note-txt', info: {txt:'You have so much more to try!'}}, false));
    return storageService.postMany(NOTES_KEY, notes);
}

function _createNote(note, isPinned){
    const newNote = {
        id: utilService.makeId(),
        label: note.label,
        type: note.type,
        isPinned,
        info: note.info
    }

    if(note.style) newNote.style = {bcg: note.style.bcg}
    return newNote
}