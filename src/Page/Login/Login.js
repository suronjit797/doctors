import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()

    const { setUser } = useContext(userContext)

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    let user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, loading, navigate])
    console.log(user);


    const handleLogin = event => {
        event.preventDefault()
        const { email, password } = event.target
        setLoading(true)
        axios.get('/json/user.json')
            .then(res => {
                const isUser = res.data.find(user => user?.email === email?.value)
                if (!isUser) {
                    setError("user not found")
                    setLoading(false)
                    return
                }
                if (isUser?.password === password?.value) {
                    setUser(isUser)
                    localStorage.setItem('user', JSON.stringify(isUser))
                    setLoading(false)
                    setError('')
                    return
                } else {
                    setError("Email and password doesn't match")
                    setLoading(false)
                }
            })
    }


    return (
        <div className='login'>
            <div className="container">
                <div>
                    <h2 className='primary-color mb-3'> Welcome to doctors portals </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ab molestiae, mollitia incidunt possimus officiis. Deserunt, odit rem inventore magnam vitae facilis expedita quas, velit dolorem obcaecati optio itaque dolor, illo eius hic ipsam? Delectus?</p>
                </div>
                <div className='auth'>
                    <form onSubmit={handleLogin} className='auth_form'>
                        <label htmlFor="email">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Provide your email'
                                required
                            />
                        </label>
                        <label htmlFor="password">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Provide your password'
                                required
                            />
                        </label>

                        <button className='border_button' type="submit"> Login </button>
                        {
                            error && <p className="red-color text-center"> {error} </p>
                        }
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;