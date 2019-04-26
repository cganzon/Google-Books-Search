import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link to="/" class="navbar-brand">Google Books Search</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/search" class="nav-link active">Search</Link>
              </li>
              <li class="nav-item">
                <Link to="/saved" class="nav-link active">View Saved Books</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
