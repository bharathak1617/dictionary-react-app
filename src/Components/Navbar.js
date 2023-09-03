import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <h1>Dictionary App</h1>
            <ul>
                <li><Link to='/'><a href="#" className="links">Home</a></Link></li>
                <li><Link to='/history'><a href="#" className="links">History</a></Link></li>
            </ul>
            </nav>
    )
}
export default Navbar;