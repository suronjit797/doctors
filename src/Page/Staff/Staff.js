import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';

const Staff = () => {
    const [patient, setPatient] = useState([])
    useEffect(() => {
        axios.get('/json/patient.json')
            .then(res => setPatient(res.data))
    }, [])
    return (
        <div>
            <Header />
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Disease</th>
                            <th>Gender</th>
                            <th>Date</th>
                            <th>Action</th>
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
                                    <td> <button disabled={pt.isVisited} className='button_primary'> Visited </button> </td>
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