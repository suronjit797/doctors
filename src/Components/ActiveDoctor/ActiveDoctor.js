import React from 'react';
import './ActiveDoctor.css'

import banner from '../../imges/doctorsGroup.png'
import userImage from '../../imges/doctor4.jpg'

const ActiveDoctor = () => {

    return (
        <div className='activeDoctorCard'>
            <div className='bannerImg'>
                <img src={banner} alt="banner" />
            </div>
            <div className='profileImg'>
                <img src={userImage} alt="profile" />
            </div>
            <div className="text-center profileBody">
                <div className="profileDetails">
                    <h2> Maria Saunders </h2>
                    <p> Doctor </p>

                    <p className='py-4'>
                        Maria Saunders is a skilled physician. He has been working efficiently for the last 12 years. Successfully completed 4550 operations in his working life
                    </p>
                </div>
                <hr />

                <div className="profileBottom">
                    <div className="left">
                        <h2>4550</h2>
                        <p>Operations</p>
                    </div>
                    <div className="right">
                        <h2> 4.6 </h2>
                        <p>Medical Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveDoctor;