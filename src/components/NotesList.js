import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onArchive}) {
    return (
        <div className="notes-list">
            {
                notes.map(note => (
                    <NoteItem
                        key={note.id}
                        {...note}
                        onDelete={onDelete}
                        onArchive={onArchive}
                    />
                ))
            }
        </div>
    );
}

export default NotesList;