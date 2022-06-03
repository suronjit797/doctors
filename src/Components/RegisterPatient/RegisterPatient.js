import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RegisterPatient = ({ register, setRegister, user }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [disease, setDisease] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [age, setAge] = useState('')
    const [doctor, setDoctor] = useState('')
    const [gender, setGender] = useState('')
    const [date, setDate] = useState('')
    const [doctorList, setDoctorList] = useState([])

    useEffect(() => {
        axios.get('/json/user.json')
            .then(res => {
                if (res.data) {
                    const doctor = res.data.filter(dctr => dctr.userRole?.toLowerCase() === 'doctor')
                    setDoctorList(doctor)
                }
            })
    }, [])





    const handleAppointment = event => {
        event.preventDefault()
        const user = { name, email, disease, phone, address, age, doctor, gender, date }
        axios.post('/json/patient.json', user)
            .then(res => console.log(res.data))
    }
    return (
        <div className={`addOne ${register ? 'active' : ''}`}>
            <div className="addOneBody">
                <div className="addOneHeader primary-background">
                    <h2> Register a patient </h2>
                    <span className="close" onClick={() => setRegister(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </div>
                <div className="addOneForm">
                    <form onSubmit={handleAppointment}>
                        <div className="grid-3">
                            <div className="input_group">
                                <label htmlFor="name"> Patient Name: </label>
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
                                <label htmlFor="disease"> Disease: </label>
                                <input
                                    type="text"
                                    id='disease'
                                    value={disease}
                                    onChange={e => setDisease(e.target.value)}
                                    placeholder='Disease'
                                    required
                                />
                            </div>

                            <div className="input_group">
                                <label htmlFor="email"> Patient Email: </label>
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
                                <label htmlFor="phone"> Patient Phone Number: </label>
                                <input
                                    type="number"
                                    id='phone'
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    placeholder='Phone'
                                    required
                                />
                            </div>

                            <div className="input_group">
                                <label htmlFor="address"> Patient Address: </label>
                                <input
                                    type="text"
                                    id='address'
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    placeholder='Address'
                                    required
                                />
                            </div>

                            <div className="input_group">
                                <label htmlFor="age"> Patient Age: </label>
                                <input
                                    type="text"
                                    id='age'
                                    value={age}
                                    onChange={e => setAge(e.target.value)}
                                    placeholder='Age'
                                    required
                                />
                            </div>

                            <div className="input_group">
                                <label htmlFor="age"> Date: </label>
                                <input
                                    type="date"
                                    id='date'
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    placeholder='Date'
                                    required
                                />
                            </div>

                            <div className="input_group">
                                <label htmlFor="doctor"> Doctor: </label>
                                <select name="doctor" id="doctor" value={doctor} onChange={e => setDoctor(e.target.value)} required >
                                    <option> Select one </option>
                                    {
                                        doctorList.map((doctor, ind) => <option key={ind} value={doctor.name}> {doctor.name} </option>)
                                    }
                                </select>
                            </div>

                            <div className="input_group">
                                <p className='mb-3'>Gender:</p>
                                <span className="radio">
                                    <input type="radio" name="gender" id="male" value='male' onClick={e => setGender(e.target.value)} />
                                    <label htmlFor="male" className='dib'> Male: </label>
                                </span>
                                <span className="ra">
                                    <input type="radio" name="gender" id="female" value='female' onClick={e => setGender(e.target.value)} />
                                    <label htmlFor="female" className='dib'> Female: </label>
                                </span>
                            </div>


                        </div>

                        <button type="submit" disabled={!(user?.userRole === 'staff')} className='button_primary'> New Appointment </button>
                        {
                            user?.userRole === 'staff' ? '' : <span className="red-color"> This section only for staff </span>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPatient;