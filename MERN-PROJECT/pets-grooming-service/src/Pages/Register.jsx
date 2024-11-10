import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        setLoading(true); // Set loading to true

        try {
            const response = await axios.post('http://localhost:3001/api/register', { email, password });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            setError('Registration failed. Please try again.'); // User-friendly error message
            console.error('Registration failed:', error);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div><br /><br />
            <div className="row border shadow box border-1 w-75 shadow text-light m-2 rounded p-5">
                <h2 className='text-center'>Register</h2>
                <div className="col-6">
                    <img src="https://media.istockphoto.com/vectors/cat-and-dog-vector-id1141985691?k=6&m=1141985691&s=170667a&w=0&h=wVVs_-VKqYoSR8lHLZPx9PfzYbo9xucmyxmuD6aTXzo=" alt="Cat and Dog" width={'400'} />
                </div>
                <div className="col-6">
                    <form onSubmit={handleRegister}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                className='form-control mb-3 w-75'
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                className='form-control mb-3 w-75'
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="confirm-password">Confirm Password:</label>
                            <input
                                className='form-control mb-3 w-75'
                                type="password"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button className='btn btn-outline-success' type="submit" disabled={loading}>
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                        {error && <p className='text-danger text-center'>{error}</p>}
                    </form>
                    <p className='text-center'>
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Register;
