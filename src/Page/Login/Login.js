import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    let user = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        if(user){
            navigate('/')
        }
    }, [user, loading, navigate])
    console.log(user);


    const handleLogin = event => {
        event.preventDefault()
        const { email, password } = event.target
        axios.get('/json/user.json')
            .then(res => {
                const isUser = res.data.find(user => user?.email === email?.value)
                if (!isUser) {
                    setError("user not found")
                    return
                }
                if (isUser?.password === password?.value) {
                    localStorage.setItem('user', JSON.stringify(isUser))
                    setError('')
                    return
                } else {
                    setError("Email and password doesn't match")
                }
            })
    }
    

    return (
        <div className='login'>
            <div className="container">
                <div>left</div>
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