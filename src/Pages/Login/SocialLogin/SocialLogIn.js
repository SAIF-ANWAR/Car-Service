import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate()
    let errorElement;
    if (error || error1) {
        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>


    }
    if (user || user1) {
        navigate('/home')
    }
    return (

        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>Or</p>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
            </div>
            <p>{errorElement}</p>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-3'>Google  Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-3'>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-3'>Github  Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;