import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Please fill in both fields');
            return;
        }

        setLoading(true);
        setError(''); // Clear previous errors

        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, password });
            console.log(response.data);
            alert('Login successful');
            navigate('/dashboard'); 
        } catch (error) {
            setError('Login failed. Please check your credentials and try again.');
            console.error('Login failed:', error);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div><br /><br />
            <div className="row border shadow box border-1 w-75 shadow text-light m-2 rounded p-5">
                <h2 className="text-center text-dark">Login</h2>
                <div className="col-6">
                    <img src="https://media.istockphoto.com/vectors/cat-and-dog-vector-id1141985691?k=6&m=1141985691&s=170667a&w=0&h=wVVs_-VKqYoSR8lHLZPx9PfzYbo9xucmyxmuD6aTXzo=" alt="Cat and Dog" width={'400'} />
                </div>
                <div className="col-6">
                    <form onSubmit={handleLogin}>
                        <div>
                            <label className='text-center' htmlFor="email">Email:</label>
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
                            <label className='text-center' htmlFor="password">Password:</label>
                            <input
                                className='form-control mb-3 w-75'
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button className='btn btn-outline-primary' type="submit" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        {error && <p className='text-danger text-center'>{error}</p>}
                    </form>
                    <p className='text-center'>Don't have an account? <a href="/register">Register here</a></p>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Login;
