import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { setIsLoading, googleSignIn, user, logOut, setUser, setError } = useAuth()
    const history = useHistory();
    const location = useLocation();
    const uri = location.state?.from || '/home';

    const loginwithGoogle = () => {
        googleSignIn()
            .then((result) => {
                setUser(result.user)
                history.push(uri);
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
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