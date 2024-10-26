import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/api/register', { email, password, confirmPassword });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div><br /><br />
            <div className="row border shadow box border-1 w-75 shadowntext-light m-2 rounded p-5 ">
                <h2 className='text-center'>Register</h2>
                <div className="col-6">
                    <img src="https://media.istockphoto.com/vectors/cat-and-dog-vector-id1141985691?k=6&m=1141985691&s=170667a&w=0&h=wVVs_-VKqYoSR8lHLZPx9PfzYbo9xucmyxmuD6aTXzo=" alt="" width={'400'} />
                </div>
                <div className="col-6">
                    <form onSubmit={handleRegister}>
                        <div>
                            <label>Email:</label>
                            <input className='form-control mb-3 w-75' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div>
                            <label>Password:</label>
                            <input className='form-control mb-3 w-75' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>

                        <div>
                            <label>Confirm Password:</label>
                            <input className='form-control mb-3 w-75' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>

                        <button className='btn btn-outline-success' type="submit">Register</button>
                    </form>
                    <p>
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Register;
