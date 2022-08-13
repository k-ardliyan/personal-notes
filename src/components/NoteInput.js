import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };
        
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTitleChange(event) {
        if (event.target.value.length <= 50) {
            this.setState({ title: event.target.value });
        }
    }

    onBodyChange(event) {
        this.setState(() => {
            return {
                body: event.target.value
            };
        })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatanmu</h2>
                <form onSubmit={this.onSubmit}>
                    <p className="note-input__title__char-limit">
                        Sisa karakter: {50 - this.state.title.length}
                    </p>
                    <input 
                        className="note-input__title" 
                        type="text" 
                        placeholder="Tulis judul di sini ..." 
                        value={this.state.title} 
                        onChange={this.onTitleChange}
                        required 
                    />
                    <textarea 
                        className="note-input__body" 
                        placeholder="Tulis catatan di sini ..." 
                        spellCheck="false"
                        required 
                        onChange={this.onBodyChange}
                        value={this.state.body}
                    />
                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;