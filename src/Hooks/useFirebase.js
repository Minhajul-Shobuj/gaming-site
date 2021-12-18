import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const googleSignIn = (history, location) => {
        setIsLoading(true)
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError('');
                const destination = location?.state?.from || '/';
                history.push(destination);
                // ...
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    };

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
            setError(error.message)
        });
    };
    useEffect(() => {
        const auth = getAuth();
        const unsubsCribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return unsubsCribed;
    }, [])

    return {
        isLoading, googleSignIn, user, error, logOut, setUser, setError
    }

};

export default useFirebase;