import React from 'react';
import navbar from './../Navbar/Navbar.css'

const Navbar = () => {
    return (
     
        <div className="container">
            <div className="row row">
                <div className="col-md-2">
                <h3>Sizes</h3>
                </div>
                <div className="col2">
              <div className="col-md-8 nav-left">
              <h3>16 product(s) found</h3>
              </div>  
             <div className="col-md-2 nav-right">
              <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  Dropdown
                  <span className="caret"></span>
                </button>
            </div>
             </div>
                </div>
                </div>
                </div>
    );
}

export default Navbar;
