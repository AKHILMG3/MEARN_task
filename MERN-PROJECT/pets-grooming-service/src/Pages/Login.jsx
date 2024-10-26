import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, password }); // replace with actual URL
            console.log(response.data);
            navigate('/dashboard');
        } catch (error) {
            setErrorMessage('Login failed. Please check your credentials and try again.');
            console.error('Login failed:', error);
        }
    };

    return (
        <div><br /><br />
            <div className="row border shadow box border-1 w-75 text-light m-2 rounded p-5">
                <h2 className="text-center">Login</h2><br /><br /><br />
                <div className="col-6">
                    <img 
                        src="https://img.freepik.com/premium-vector/cartoon-dog-cat-are-looking-each-other_585140-5018.jpg?w=740" 
                        width="400" 
                        alt="Cartoon of a dog and cat looking at each other" 
                    />
                </div>
                <div className="col-6">
                    <form onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                className="form-control mb-3 w-75"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                className="form-control mb-3 w-75"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button className="btn btn-outline-success" type="submit">Login</button>
                    </form>
                    {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
                    <p>
                        Don't have an account? <a href="/register">Register here</a>
                    </p>
                </div><br /><br />
            </div>
            <br /><br />
        </div>
    );
}

export default Login;
