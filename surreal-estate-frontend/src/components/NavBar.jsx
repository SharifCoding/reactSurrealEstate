// import libraries
import React from 'react';

// import route component
import { Link } from 'react-router-dom';

const NavigationBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Surreal Estate</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          {/* link to root path when user clicks on the See Listings */}
          <Link to="/" className="nav-link" href="#">See Listings</Link>
        </li>
        <li className="nav-item">
          {/* link to post-property route when user clicks on the Add a Property */}
          <Link to="/post-property" className="nav-link" href="#">Add a Property</Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <select
          className="form-control mr-sm-2"
          id="exampleFormControlSelect1"
        >
          <option value="price-less-than">Price less than</option>
          <option value="price-higher-than">Price higher than</option>
        </select>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
);

export default NavigationBar;
