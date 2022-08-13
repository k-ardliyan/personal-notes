import React from "react";
import { showFormattedDate } from "../utils/index";
import ButtonDelete from "./ButtonDelete";
import ButtonArchive from "./ButtonArchive";

function NoteItem({ title, createdAt, body, id, onDelete, onArchive, archived }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <ButtonDelete id={id} onDelete={onDelete} />
                <ButtonArchive id={id} onArchive={onArchive} archived={archived} />
            </div>
        </div>
    );
}

export default NoteItem;