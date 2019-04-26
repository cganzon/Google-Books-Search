import React, { Component } from "react";

class Search extends Component {
    state = {
        title: ""
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        alert(`Searching for ${this.state.title}`)
        this.setState({
            title: ""
        });
    }

    render() {
        return (
            <div className="jumbotron mt-5">
                <h1 className="mb-3">Search for a book</h1>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" name="title" onChange={this.handleInputChange} placeholder="Enter a book title" />
                    </div>
                    <button type="submit" className="btn btn-primary float-right" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Search;