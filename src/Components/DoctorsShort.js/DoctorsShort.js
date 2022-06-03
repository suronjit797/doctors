import { faBed, faPeopleCarryBox, faUserDoctor, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './DoctorsShort.css'
import DoctorsShortCard from './DoctorsShortCard';

const DoctorsShort = () => {

    const data = [
        {
            id: 1,
            post: 'Doctors',
            total: 204,
            icon: faUserDoctor,
        },
        {
            id: 2,
            post: 'Nurse',
            total: 500,
            icon: faUserNurse,
        },
        {
            id: 1,
            post: 'Patients',
            total: 1000,
            icon: faBed,
        },
        {
            id: 1,
            post: 'Staff',
            total: 300,
            icon: faPeopleCarryBox,
        },
    ]


    return (
        <div className='doctorsShort'>
            {
                data.map(post=>(
                    <DoctorsShortCard post={post} />
                ))
            }
        </div>
    );
};

export default DoctorsShort;