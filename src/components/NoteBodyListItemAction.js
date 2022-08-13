import React from "react";

function NoteBodyListItemAction(){
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button">Delete</button>
            <button className="note-item__archive-button">Arsipkan</button>
        </div>
    );
}

export default NoteBodyListItemAction;