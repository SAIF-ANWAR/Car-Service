import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from './SocialLogin/SocialLogIn';

const Login = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    let errorElement;
    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error?.message} </p>

    }
    const navigateRegister = event => {
        navigate('/register')
    }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const resetPasswordRegister = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center mt-4'>Please login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='d-block w-50 mx-auto'>
                    Login
                </Button>
            </Form>

            <p>{errorElement}</p>
            <p>New to genius car? <Link to="/register" className=' pe-auto text-primary' onClick={navigateRegister}>please register</Link></p>
            <p>forget Password? <Link to="" className=' pe-auto text-primary' onClick={resetPasswordRegister}>Reset Password</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;