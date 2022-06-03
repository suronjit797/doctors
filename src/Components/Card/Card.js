import React from 'react';
import './Card.css'

const Card = ({ user }) => {
    return (
        <div className='card'>
            <img src={user?.userImage} alt="user" />
            <div className="card_body text-center">
                {user?.name ? <h4>Name: {user?.name}</h4> : ''}
                {user?.email ? <p><b>Email:</b> {user?.email} </p> : ''}
                {user?.userRole ? <p><b> Post: </b>{user?.userRole} </p> : ''}
                {user?.specialty ? <p> <b>Specialty: </b>{user?.specialty} </p> : ''}

                <div className='mt-4'>
                    <button className="button_primary mx-4"> Change post </button>
                    <button className="button_red mx-4"> Remove </button>
                </div>
            </div>
        </div>
    );
};

export default Card;