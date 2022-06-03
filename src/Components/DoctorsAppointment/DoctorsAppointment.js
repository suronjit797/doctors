import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DoctorsAppointment = ({ doctor, setDoctor, user }) => {

    const [patient, setPatient] = useState([])

    useEffect(() => {
        axios.get('/json/patient.json')
            .then(res => {
                const loginDoctorsPatient = res.data.filter(pt => pt.doctor?.toLowerCase() === user?.name?.toLowerCase())
                setPatient(loginDoctorsPatient)
            })
    }, [user])

    return (
        <div className={`addOne ${doctor ? 'active' : ''}`}>
            <div className="addOneBody">
                <div className="addOneHeader primary-background">
                    <h2> My patients </h2>
                    <span className="close" onClick={() => setDoctor(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </div>
                {
                    user?.userRole?.toLowerCase() === 'doctor' ? (
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
                                        <tr key={pt.id} className={pt.isVisited ? 'text-through' : '' } >
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
                    ) : <p className="red-color"> This section only for doctors </p>
                }
            </div>
        </div>
    );
};


export default DoctorsAppointment;