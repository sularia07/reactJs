import React from "react";
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaUsers, FaFolder, FaArchive, FaQuestionCircle, FaCog } from 'react-icons/fa';
import "./navBar.css";

const NavBar = () => {
    return (
        <nav id="navbar">
            <div className="navbar-logo">
                <div className="navbar-item-inner">LOGO</div>
            </div>
            <ul className="navbar-items">
                <li className="navbar-item">
                    <Link to="/" className="navbar-item-inner">
                        <div className="navbar-item-inner-icon-wrapper">
                            <FaHome />
                        </div>
                        <span className="link-text">Home</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/messages" className="navbar-item-inner">
                        <div className="navbar-item-inner-icon-wrapper">
                            <FaEnvelope />
                        </div>
                        <span className="link-text">Messages</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/customers" className="navbar-item-inner">
                        <div className="navbar-item-inner-icon-wrapper">
                            <FaUsers />
                        </div>
                        <span className="link-text">Customers</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/projects" className="navbar-item-inner">
                        <div className="navbar-item-inner-icon-wrapper">
                            <FaFolder />
                        </div>
                        <span className="link-text">Projects</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/resources" className="navbar-item-inner">
                        <div className="navbar-item-inner-icon-wrapper">
                            <FaArchive />
                        </div>
                        <span className="link-text">Resources</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/help" className="navbar-item-inner">
                        <div className="navbar-item-inner-icon-wrapper">
                            <FaQuestionCircle />
                        </div>
                        <span className="link-text">Help</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/settings" className="navbar-item-inner">
                        <div className="navbar-item-inner-icon-wrapper">
                            <FaCog />
                        </div>
                        <span className="link-text">Settings</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;