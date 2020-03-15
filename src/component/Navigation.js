import React from "react"
import {Link} from "react-router-dom"


function Navigation() {

    return (
        <div className="nav">
        <Link to="/">home</Link>
        <br/>

        
        <Link to="/about">about</Link>
        </div>
    )
    
    
}

export default Navigation;