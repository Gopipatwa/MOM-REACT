import React from 'react';
const Header=()=>{
    return(
    <div className="dashboard">
      <div className="container top-header">
        <div className="Navbar d-flex flex-row justify-content-between flex-wrap">
          <div className="search-bar my-3">
            <div className="input-group rounded">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
          <div className="Header" style={{fontFamily: 'Roboto Slab serif'}}>
            <div className="row">
              <div className="Header-name" style={{fontSize: '40px'}}>
                CHAAR CHOUGHI
              </div>
            </div>
            <div className="row">
              <div
                className="Header-description"
                style={{textAlign: 'center', fontSize: 'large'}}
              >
                INDIAN. EVERYWHERE.
              </div>
            </div>
          </div>
          <div className="ul-list my-3 d-flex flex-row justify-content-end">
            <ul className="d-flex flex-row">
              <li style={{listStyleType: 'none'}}>
                <button><i className="fa fa-user yellow-color"></i></button>
              </li>
              <li style={{listStyleType: 'none'}}>
                <button><i className="fa fa-shopping-cart"></i></button>
              </li>
              <li>
                <button><i className="fa fa-heart" aria-hidden="true"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Header