import React from 'react';
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>Lamasocial</h3>
                <span className='loginDesc'>Connect with firends and the world around uou on Lamasocial</span>
            </div>
            <div className='loginRight'>
                <div className='loginBox'>
                    <input placeholder='Email' className='loginInput'/>
                    <input placeholder='Password' className='loginInput'/>
                    <button className='loginButton'>Log In</button>
                    <span className='loginforgot'>Forgot Password?</span>
                    <button className='loginRegisterButton'>Create a New Account</button>
                </div>

            </div>
        </div>
      
    </div>
  );
}

export default Login;
