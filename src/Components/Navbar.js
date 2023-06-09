import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/TextUtility">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/about">{props.abouttitle}</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light' ?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode}type="checkbox"  id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light' ? 'dark':'light'} Mode`}</label>
        </div>
      </div>
    </nav>
  )
}
