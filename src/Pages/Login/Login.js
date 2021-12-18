import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn, user, logOut } = useAuth()
    const history = useHistory();
    const location = useLocation();

    const loginwithGoogle = () => {
        googleSignIn(history, location)
    }
    return (
        <div className="mt-5">
            <h1>Please,Login</h1>
            {user.displayName ?
                <button onClick={logOut}>Logout</button> :
                <button onClick={loginwithGoogle} className="btn btn-primary" type="button">Login with google</button>}
        </div>
    );
};

export default Login;