import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader(props){
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteSearch onSearch={props.onSearch}/>
        </div>
    );
}



export default NoteAppHeader;