import React from "react";
import NoteBodyListItemContent from "./NoteBodyListItemContent";
import NoteBodyListItemAction from "./NoteBodyListItemAction";

function NoteBodyListItem() {
    return (
        <div className="note-item">
            <NoteBodyListItemContent />
            <NoteBodyListItemAction />
        </div>
    );
}

export default NoteBodyListItem;