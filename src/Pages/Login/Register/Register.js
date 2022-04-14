import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogin/SocialLogIn';
import { async } from '@firebase/util';


const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name?.value
        const email = event.target.email?.value
        const password = event.target.password?.value
        // const agree = event.target.terms.checked

        await createUserWithEmailAndPassword(email, password)
        // await updateProfile({ displayName: name });
        // alert('Updated profile');
        navigate('/home')


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


            </form>

            <input onClick={() => setAgree(!false)} type="checkbox" name="terms" id="terms" />
            {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms and Conditions</label> */}
            <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
            <input disabled={!agree} type="submit" value="Register" className='btn btn-primary d-block mx-auto w-50 mt-3' />
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto'>please Log in</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Register;