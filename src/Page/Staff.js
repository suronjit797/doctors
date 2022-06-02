import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card/Card';

const Staff = () => {
    const [staffs, setStaffs] = useState([])

    useEffect(() => {
        axios.get('/json/user.json')
            .then(res => {
                if (res.data) {
                    const staff = res.data.filter(usr => usr.userRole.toLowerCase() === 'staff')
                    setStaffs(staff);
                }
            })
    }, [])



    return (

        <div className='container'>
            <div className="grid_card">
                {
                    staffs && staffs.map((staff, index) => (
                        <Card key={index} user={staff} />
                    ))
                }
            </div>
        </div>
    );
};

export default Staff;