import React from "react";

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(event) {
        this.setState({ keyword: event.target.value });
        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <div className="note-search">
                <input
                    className="note-search__input"
                    type="text"
                    placeholder="Cari judul catatan ..."
                    value={this.state.keyword}
                    onChange={this.onSearch}
                />
            </div>
        );
    }
}

export default NoteSearch;