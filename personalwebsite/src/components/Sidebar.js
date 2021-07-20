import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import './Sidebar.css'

function Sidebar() {
    const [sidebar, set_sidebar] = useState(false)

    const show_sidebar = () => set_sidebar(!sidebar);

    return (
        <div>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={show_sidebar}></FaIcons.FaBars>
                </Link>
            </div>
            <nav className={sidebar ? "nav-meun active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars"> 
                            <FaIcons.FaTimes />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
