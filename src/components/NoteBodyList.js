import React from "react";
import NoteBodyListItem from "./NoteBodyListItem";

function NoteBodyList() {
    const noteList = [];
    if (noteList.length > 0) {
        return(
            <div className="notes-list">
                <NoteBodyListItem />
            </div>
        );
    } else {
        return(
            <p className="notes-list__empty-message">Tidak ada cacatan</p>
        );
    }
}

export default NoteBodyList;