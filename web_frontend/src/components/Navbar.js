import React from 'react'
export default function Navbar() {
  return (
    <div
      className="nav justify-content-center my-3"
      style={{borderBottom:"1px solid rgb(209, 190, 190);border-top:1px solid rgb(209, 190, 190)"}}
    >
      <ul
        className="navbar-list d-flex flex-row my-0 p-2"
        style={{listStyle: "none",textDecoration: "none"}}
      >
        <li>
          <div className="box">
            <a href="#">HOME |</a>
          </div>
        </li>
        <li>
          <div className="box">
            <a href="#">APPAREL |</a>
          </div>
        </li>
        <li>
          <div className="box">
            <a href="#">LIFESTYLE |</a>
          </div>
        </li>
        <li>
          <div className="box">
            <a href="#">ACCESSORIES |</a>
          </div>
        </li>
        <li>
          <div className="box">
            <a href="#">BLOG |</a>
          </div>
        </li>
        <li>
          <div className="box">
            <a href="#">ABOUT |</a>
          </div>
        </li>
        <li>
          <div className="box">
            <a href="#">DOCUMENTATION |</a>
          </div>
        </li>
        <li>
          <div className="box">
            <a href="#">CONTACT-US </a>
          </div>
        </li>
      </ul>
    </div>
  )
}
