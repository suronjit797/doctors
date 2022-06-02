import { faCalendarCheck, faCalendarDays, faPen, faPenFancy, faPersonCirclePlus, faScrewdriverWrench, faUser, faUserAstronaut, faUserDoctor, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css'

import doctor from '../../imges/doctor.png'
import { faPiedPiper, faPiedPiperSquare } from '@fortawesome/free-brands-svg-icons';

const Header = () => {

    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(true)





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
                    <li> <img src={doctor} alt="doctor" /> </li>
                </ul>
            </div>

            <div className={`side_menu ${open ? 'active' : ''}`} >
                <ul className='side_menu-body'>
                    <li className="close"> <FontAwesomeIcon icon={faXmark} onClick={() => setOpen(false)} /> </li>
                    <h1 className='text-center white-color'> Doctor's portal </h1>
                    <li className='profile'>
                        <img src={doctor} alt="doctor" />
                        <p className='name'> name </p>
                        <p className='role'> admin </p>
                    </li>
                    <li> <FontAwesomeIcon icon={faPiedPiperSquare} />  <NavLink to="/">  Dashboard </NavLink></li>
                    <li> <FontAwesomeIcon icon={faUserAstronaut} />  <NavLink to="/admin"> Admin </NavLink></li>
                    <li> <FontAwesomeIcon icon={faUser} />  <NavLink to="/doctor">  Doctor </NavLink></li>
                    <li> <FontAwesomeIcon icon={faUserDoctor} /> <NavLink to="/staff">   Staff </NavLink></li>
                </ul>
            </div>

        </header>
    );
};

export default Header;