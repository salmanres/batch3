import React, { Fragment } from 'react'
import App from '../App'
import Navbar from '../navigation/Navbar'
import { Outlet } from 'react-router-dom'

function LandingPage() {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
        </Fragment>
    )
}

export default LandingPage