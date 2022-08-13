import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import NotesListEmptyMessage from "./NotesListEmptyMessage";

function NoteAppBody(props){
    return (
        <div className="note-app__body">
            <NoteInput addNote={props.onAddNote}/>
            <h2>Catatan Aktif</h2>
            {
                props.notes.filter(note => note.archived === false).length > 0 
                ? <NotesList 
                    notes={props.notes.filter(note => note.archived === false)} 
                    onDelete={props.onDelete} 
                    onArchive={props.onArchive}
                  />
                : <NotesListEmptyMessage/>
            }
            <h2>Catatan Arsip</h2>
            {
                props.notes.filter(note => note.archived === true).length > 0
                ? <NotesList 
                    notes={props.notes.filter(note => note.archived === true)} 
                    onDelete={props.onDelete} 
                    onArchive={props.onArchive}
                  />
                : <NotesListEmptyMessage/>
            }
        </div>
    );
}

export default NoteAppBody;