import React from "react";
import { getInitialData } from "../utils/index";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchKeyword: '',
        };

        this.onSearch = this.onSearch.bind(this);
        this.onAddNote = this.onAddNote.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onArchive = this.onArchive.bind(this);
    }

    onSearch(keyword) {
        this.setState({ searchKeyword: keyword });
    }

    onAddNote({ title, body }) {
        const currentDate = new Date().toISOString();
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: currentDate,
                    }
                ]
            };
        })
    }

    onDelete(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchive(id) {
        const notes = this.state.notes.map((note) => {	
            if (note.id === id) {	
              if (note.archived === false) {	
                return { ...note, archived: true };	
              } else {	
                return { ...note, archived: false };	
              }	
            }	
            return note;	
          })
        this.setState({ notes });
    }

    render() {
        const filteredNotes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));
        return (
            <div className="note-app">
                <NoteAppHeader onSearch={this.onSearch}/>
                <NoteAppBody 
                notes={filteredNotes} 
                onAddNote={this.onAddNote} 
                onDelete={this.onDelete} 
                onArchive={this.onArchive} />
            </div>
        );
    }
}

export default NoteApp;