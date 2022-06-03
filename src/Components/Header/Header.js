import { faCalendarDays, faGear, faMaskFace, faPen, faPersonCirclePlus, faPowerOff, faUser, faUserDoctor, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css'

import { faPiedPiperSquare } from '@fortawesome/free-brands-svg-icons';
import { userContext } from '../../context/UserContext';
import AddOne from '../AddOne/AddOne';
import RegisterPatient from '../RegisterPatient/RegisterPatient';
import DoctorsAppointment from '../DoctorsAppointment/DoctorsAppointment';

const Header = () => {
    const { user, setUser } = useContext(userContext)
    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const [addOne, setAddOne] = useState(false)
    const [register, setRegister] = useState(false)
    const [doctor, setDoctor] = useState(false)


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
                    {
                        !!(user.userRole === "admin") && <li onClick={() => setAddOne(true)} ><FontAwesomeIcon icon={faPersonCirclePlus} /> </li>
                    }

                    {
                        !!(user.userRole === "doctor") && <li onClick={() => setDoctor(true)}><FontAwesomeIcon icon={faCalendarDays} /> </li>
                    }

                    {
                        !!(user.userRole === "staff") && <li onClick={() => setRegister(true)} ><FontAwesomeIcon icon={faPen} /> </li>
                    }


                    <li className='user_profile' onClick={() => setModal(!modal)}>
                        <img src={user?.userImage} alt="doctor" />
                        <div className={`user_profile-modal ${modal ? 'active' : ''}`}  >
                            <div>Welcome, {user?.name}</div>
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
                        <img src={user?.userImage} alt="doctor" />
                        <p className='name'> {user?.name} </p>
                        <p className='role'> {user?.userRole} </p>
                    </li>
                    <li> <FontAwesomeIcon icon={faPiedPiperSquare} />  <NavLink to="/">  Dashboard </NavLink></li>
                    {
                        !!(user.userRole === "admin") && <li> <FontAwesomeIcon icon={faUser} />  <NavLink to="/users">  Users </NavLink></li>
                    }
                    <li> <FontAwesomeIcon icon={faUserDoctor} /> <NavLink to="/patients">   Patients </NavLink></li>



                </ul>
            </div>

            <AddOne addOne={addOne} setAddOne={setAddOne} user={user} />
            <RegisterPatient register={register} setRegister={setRegister} user={user} />
            <DoctorsAppointment doctor={doctor} setDoctor={setDoctor} user={user} />

        </header>
    );
};

export default Header;