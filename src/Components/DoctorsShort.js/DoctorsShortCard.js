import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DoctorsShortCard = ({post}) => {
    return (
        <div className='doctorsShortCard'>
            <h3> {post.post} </h3>
            <p> {post.total} </p>

            <div className="icon">
                <FontAwesomeIcon icon={post.icon} />
            </div>
        </div>
    );
};

export default DoctorsShortCard;