import React, { useState, useEffect } from 'react'

import './Navbar.css'
import { Button, IconButton } from '@mui/material'
import NavbarDatas from '../NavbarDatas'
import { Link, NavLink } from 'react-router-dom'
import MobileMenu from '../MobileMenu/Mobile-Menu'
import Logo from '../../../images/logo1.jpg'

import SearchIcon from '@mui/icons-material/Search';
export default function Navbar() {

    const [navbarData, setNavbarData] = useState(NavbarDatas)
    const [getIsLogin, setGetIsLogin] = useState(null)
    const [getUserName, setGetUserName] = useState(null)

   

    useEffect(() => {
        setGetIsLogin(localStorage.getItem('isLogin'))
        setGetUserName(localStorage.getItem('username'))

    }, [])


    useEffect(() => {
        setGetIsLogin(localStorage.getItem('isLogin'))
        setGetUserName(localStorage.getItem('username'))
    }, [getIsLogin,
        getUserName])






    return (
        <div className='navbar-container'>
            <MobileMenu />
            <NavLink to="React-Clinic-Project">

                <img src={Logo} className="logo" alt="" />
            </NavLink>
            <nav className='navbar1'>
                <ul className='main-menu-list'>
                    {navbarData.length && (
                        navbarData.map(nav => (
                            <li key={nav.id} className={`main-menu-listitem ${window.location.pathname.slice(1) === nav.link ? 'nav-active' : null}`}><NavLink to={nav.link} className={window.location.pathname.slice(1) === nav.link ? "nav-active" : null}>{nav.title}</NavLink>
                            </li>
                        ))
                    )}
                </ul>
            </nav>
            <div className='search-bar'>
                <input type="text" className='search-input' placeholder='نام پزشک ...' />
                <div className="search-bar-leftside">
                    <IconButton sx={{ color: '#43bda8' }}>

                        <SearchIcon  />
                    </IconButton>
                </div>


            </div>
            <Button className='reg-login-btn'>
                {localStorage.getItem('isLogin') ? (
                    <Link to='React-Clinic-Project/userpanel/responsiveness'>
                        {getUserName}
                    </Link>
                ) : (
                    <Link to='React-Clinic-Project/login'>
                        ورود
                    </Link>
                )}
            </Button>

        </div>
    )
}
