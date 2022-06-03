import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import './AddOne.css'

const AddOne = ({ addOne, setAddOne }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [post, setPost] = useState('doctors')

    const handleAdd = event => {
        event.preventDefault()
        const user = { name, email, post }
        axios.post('/json/user.json', user)
            .then(res => console.log(res.data))
    }
    return (
        <div className={`addOne ${addOne ? 'active' : ''}`}>
            <div className="addOneBody">
                <div className="addOneHeader primary-background">
                    <h2> Add doctors/staff </h2>
                    <span className="close" onClick={() => setAddOne(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </div>
                <div className="addOneForm">
                    <form onSubmit={handleAdd}>
                        <div className="grid-3">
                            <div className="input_group">
                                <label htmlFor="name"> Name: </label>
                                <input
                                    type="text"
                                    id='name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder='Name'
                                    required
                                />
                            </div>
                            <div className="input_group">
                                <label htmlFor="email"> Email: </label>
                                <input
                                    type="text"
                                    id='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder='Email'
                                    required
                                />
                            </div>
                            <div className="input_group">
                                <label htmlFor="post"> Post: </label>
                                <select name="post" id="post" value={post} onChange={e => setPost(e.target.value)} required >
                                    <option value="doctors"> Doctors </option>
                                    <option value="staff"> Staff </option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className='button_primary'> Add new </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddOne;