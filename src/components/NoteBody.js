import React from "react";
import NoteBodyInput from "./NoteBodyInput";
import NoteBodyList from "./NoteBodyList";

class NoteBody extends React.Component {
    render() {
        return(
            <div className="note-app__body">
                <div className="note-input">
                    <h2>Buat catatan</h2>
                    <NoteBodyInput />
                    <h2>Catatan Aktif</h2>
                    <NoteBodyList />
                    <h2>Catatan Arsip</h2>
                    <NoteBodyList />
                </div>
            </div>
        );
    }
}

export default NoteBody;