import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        axios.get('/json/user.json')
            .then(res => {
                if (res.data) {
                    const doctors = res.data.filter(usr => usr.userRole.toLowerCase() === 'doctor')
                    setDoctors(doctors);
                }
            })
    }, [])



    return (
        <div className='container'>
            <div className="grid_card">
                {
                    doctors && doctors.map((doctor, index) => (
                        <Card key={index} user={doctor} />
                    ))
                }
            </div>
        </div>
    );
};

export default Doctors;