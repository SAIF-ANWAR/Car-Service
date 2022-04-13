import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate('/home')
    }
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name?.value
        const email = event.target.email?.value
        const password = event.target.password?.value

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form onClick={handleRegister}>
                <input type="text" name="name" id="" placeholder='your name' />
                <br />
                <input type="email" name="email" id="" placeholder='your email' />
                <br />
                <input type="password" name="password" id="" placeholder='password' />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto'>please Log in</Link></p>
        </div>
    );
};

export default Register;