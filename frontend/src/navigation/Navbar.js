import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <Link to="/login" className='btn btn-warning mx-2'>login</Link>
              </li>
              <li className="nav-item">
                <Link to="/userdata" className='btn btn-warning mx-2'>userdata</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className='mx-2'>Register Page</Link>
              </li>
              <li className="nav-item">
                <Link to="/mapping" className='mx-2'>Data Mapping</Link>
              </li>
              <li className="nav-item">
                <Link to="/redux" className='mx-2'>REDUX</Link>
              </li>
              <li className="nav-item">
                <Link to="/fetch-api" className='mx-2'>FETCH API METHOD</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar