import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import './Users.css'

const Doctors = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('/json/user.json')
            .then(res => {
                if (res.data) {
                    setUsers(res.data);
                }
            })
    }, [])



    return (
        <>
            <Header />
            <div className='container'>
                <div className="grid_card">
                    {
                        users && users.map((doctor, index) => (
                            <Card key={index} user={doctor} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Doctors;