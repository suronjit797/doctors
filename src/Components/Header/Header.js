import { faCalendarCheck, faCalendarDays, faGear, faMaskFace, faPen, faPenFancy, faPersonCirclePlus, faPowerOff, faScrewdriverWrench, faUser, faUserAstronaut, faUserDoctor, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css'

import doctor from '../../imges/doctor.png'
import { faPiedPiperSquare } from '@fortawesome/free-brands-svg-icons';
import { userContext } from '../../context/UserContext';

const Header = () => {
    const { user, setUser } = useContext(userContext)
    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(false)


    const logout = () => {
        localStorage.removeItem('user')
        setUser({})
    }


    return (
        <header className='header'>
            <div className="container">
                <div className={`header_bars ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`main_menu ${open ? 'active' : ''}`}>
                    <li> <NavLink to="/home"> <FontAwesomeIcon icon={faPersonCirclePlus} />  </NavLink></li>
                    <li> <NavLink to="/home"> <FontAwesomeIcon icon={faCalendarDays} />  </NavLink></li>
                    <li> <NavLink to="/home"> <FontAwesomeIcon icon={faPen} />  </NavLink></li>
                    <li className='user_profile' onClick={() => setModal(!modal)}>
                        <img src={user.userImage} alt="doctor" />
                        <div className={`user_profile-modal ${modal ? 'active' : ''}`}  >
                            <div>Welcome, {user.name}</div>
                            <hr />
                            <div>
                                <p className='d-flex align-items-center  cursor-pointer' >
                                    <FontAwesomeIcon icon={faGear} /> Update profile
                                </p>
                            </div>
                            <hr />
                            <div>
                                <p className='d-flex align-items-center red-color cursor-pointer' onClick={logout}>
                                    <FontAwesomeIcon icon={faPowerOff} /> Logout
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className={`side_menu ${open ? 'active' : ''}`} >
                <ul className='side_menu-body'>
                    <li className="close"> <FontAwesomeIcon icon={faXmark} onClick={() => setOpen(false)} /> </li>
                    <Link to='/'>
                        <h1 className='text-center white-color'>  <FontAwesomeIcon icon={faMaskFace} />   Doctor's portal </h1>
                    </Link>
                    <li className='profile'>
                        <img src={user.userImage} alt="doctor" />
                        <p className='name'> {user.name} </p>
                        <p className='role'> {user.userRole} </p>
                    </li>
                    <li> <FontAwesomeIcon icon={faPiedPiperSquare} />  <NavLink to="/">  Dashboard </NavLink></li>
                    <li> <FontAwesomeIcon icon={faUserAstronaut} />  <NavLink to="/admin"> Admin </NavLink></li>
                    <li> <FontAwesomeIcon icon={faUser} />  <NavLink to="/users">  Users </NavLink></li>
                    <li> <FontAwesomeIcon icon={faUserDoctor} /> <NavLink to="/staff">   Staff </NavLink></li>
                </ul>
            </div>

        </header>
    );
};

export default Header;