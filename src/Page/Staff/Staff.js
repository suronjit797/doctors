import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import { userContext } from '../../context/UserContext';

const Staff = () => {
    const { user, setUser } = useContext(userContext)
    const [patient, setPatient] = useState([])
    useEffect(() => {
        axios.get('/json/patient.json')
            .then(res => setPatient(res.data))
    }, [])
    return (
        <div>
            <Header />
            <div className="container">
                <h3 className='text-center py-4'> All patient </h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Disease</th>
                            <th>Gender</th>
                            <th>Date</th>
                            {
                                !(user?.userRole === 'doctor') && <th>Action</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patient.map((pt, ind) => (
                                <tr key={pt.id} className={pt.isVisited ? 'text-through' : ''} >
                                    <td> {ind + 1} </td>
                                    <td> {pt.name} </td>
                                    <td> {pt.disease} </td>
                                    <td> {pt.gender} </td>
                                    <td> {new Date(pt.date).toLocaleDateString()} </td>
                                    {
                                        !(user?.userRole === 'doctor') && <td>
                                            {
                                                pt.isVisited ? <button className='button_red' disabled=""> Delete </button>
                                                    :
                                                    <button className='button_primary' disabled=""> Visited </button>
                                            }
                                        </td>
                                    }

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Staff;