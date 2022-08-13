import React from "react";

class NoteBodyInput extends React.Component {
    render() {
        return (
            <form>
                <p className="note-input__title__char-limit"></p>
                <input className="note-input__title" type="text" placeholder="Tulis judul di sini ..." required value=""/>
                <textarea className="note-input__body" placeholder="Tulis catatan di sini ..." required spellcheck="false" />
                <button type="submit">Buat</button>
            </form>
        );
    }
}

export default NoteBodyInput;