import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <Router>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link to="/" class="navbar-brand">Google Books Search</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/search" class="nav-link active" href="#">Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/saved" class="nav-link active" href="#">View Saved Books</Link>
                            </li>
                            {/* <Route exact path="/search" component={Search} /> */}
                            {/* <Route exact path="/saved" component={Saved} /> */}
                        </ul>
                    </div>
                </nav>
            </Router>
        )
    }
}

export default Navbar;