import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signinUsingGoogle } = useAuth();
    return (
        <div id="login">
            <h2>Please Log in</h2>
            <button onClick={signinUsingGoogle} className="btn btn-success">Google Sign in</button>
        </div>
    );
};

export default Login;