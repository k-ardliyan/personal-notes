import React from "react";
// import { getInitialData, showFormattedDate } from "../utils";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NoteApp extends React.Component {
    render() {
        return (
            <div className="note-app">
                <NoteHeader />
                <NoteBody />
            </div>
        );
    }
}

export default NoteApp;