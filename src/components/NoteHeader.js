import React from "react";

class NoteHeader extends React.Component {
    render() {
        return (
            <div className="note-app__header">
                <h1>Notes</h1>
                <div className="note-search">
                    <input type="text" placeholder="Cari catatan ..." value=""/>
                </div>
            </div>
        );
    }
}

export default NoteHeader;