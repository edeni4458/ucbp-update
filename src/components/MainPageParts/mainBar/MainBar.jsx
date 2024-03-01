import { Link, NavLink } from 'react-router-dom';
import ucbpLogo from '../../../images/ucbp-logo.png'

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './mainbar.css'


const NavList = () => (
    <>
        <div className='nav-right'>
            <div className='nav-list'>
                <div className="list-margin">
                    <NavLink className="nav-link_decoration" reloadDocument   to="/"
                        end
                        style={({ isActive, isPending }) => {
                            return {
                                borderTop: isActive ? "1px lightgray solid" : "none", color: isActive ? "red" : "white",
                                color: isActive ? "red" : "white",
                                borderBottom: isActive ? "1px lightgray solid" : "none",
                            };
                        }}><Link reloadDocument className='nav-link' to={"/"}>Home</Link>
                    </NavLink>
                </div>
                <div className="list-margin">
                    <NavLink className="nav-link_decoration" reloadDocument to="about"
                        end
                        style={({ isActive, isPending }) => {
                            return {
                                borderTop: isActive ? "1px lightgray solid" : "none", color: isActive ? "red" : "white",
                                color: isActive ? "red" : "white",
                                borderBottom: isActive ? "1px lightgray solid" : "none",
                            };
                        }}><Link reloadDocument to={"/about"} className='nav-link'>About</Link>
                    </NavLink>
                </div>
                <div className="list-margin">
                    <NavLink className="nav-link_decoration" reloadDocument to="/UCBP"
                        end
                        style={({ isActive, isPending }) => {
                            return {
                                borderTop: isActive ? "1px lightgray solid" : "none", color: isActive ? "red" : "white",
                                color: isActive ? "red" : "white",
                                borderBottom: isActive ? "1px lightgray solid" : "none",
                            };
                        }}><Link reloadDocument to={"/UCBP"} className='nav-link'>Episodes</Link>
                    </NavLink>
                </div>
                <div className="list-margin">
                    <NavLink className="nav-link_decoration" reloadDocument to="/news"
                        end
                        style={({ isActive, isPending }) => {
                            return {
                                borderTop: isActive ? "1px lightgray solid" : "none",
                                color: isActive ? "red" : "white",
                                borderBottom: isActive ? "1px lightgray solid" : "none",
                            };
                        }}>
                        <Link reloadDocument to={"/news"} className='nav-link'>CB News</Link>
                    </NavLink>
                </div>
                <button className='btn btn-outline-danger'>
                    <div className="">
                        <Link reloadDocument to={"/connect"} className='nav-link-2'>Connect</Link>
                    </div>
                </button>
            </div>
        </div>
    </>
)

const MainBar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)




    return (
        <div className='nav-bar-main'>
            <div className='nav-bar-links'>
                <div className='nav-bar-logo-links'>
                    <Link reloadDocument to='/'>
                        <img id='ucbp-logo' src={ucbpLogo} alt="UCBP Icon" />
                    </Link>
                    <h2 id='nav-title'>Under the Cardboardbox Podcast</h2>
                </div>
                <NavList />
                <div className='nav-bar-list'>
                    {toggleMenu
                        ? <RiCloseLine color="white" size={22} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="white" size={22} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='nav-bar-mobile-menu'>
                            <NavList />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MainBar