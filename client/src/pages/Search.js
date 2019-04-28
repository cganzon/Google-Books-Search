import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
    state = {
        title: "",
        books: []
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        // alert(`Searching for ${this.state.title}`)
        API.search(this.state.title)
            .then(
                (response) => {
                    console.log(response.data.items);
                    this.setState({ books: response.data.items });
                    this.setState({ title: "" });
                }
            );
    }

    render() {
        return (
            <div>
                <div className="jumbotron mt-5">
                    <h1 className="mb-3">Search for a book</h1>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" name="title" onChange={this.handleInputChange} placeholder="Enter a book title" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right" onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </div>
                <ul className="list-group">
                    {this.state.books.map(book => {
                        return (
                            <li key={book.id} className="list-group-item">
                                <img
                                    src={book.volumeInfo.imageLinks
                                        ? book.volumeInfo.imageLinks.thumbnail
                                        : "https://via.placeholder.com/150"}
                                        alt=""
                                    className="card-img-top"
                                    style={{ height: "250px", width: "160px", padding: "10px" }}
                                />
                                <h5><strong>{book.volumeInfo.title}</strong></h5>
                                <p><strong>Author(s)</strong>: {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "N/A"}</p>
                                <p><strong>Description</strong>: {book.volumeInfo.description}</p>
                                <a href={book.volumeInfo.infoLink} target="_blank" className="btn btn-primary mr-2">View</a>
                                <a href="#" className="btn btn-danger">Save</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Search;