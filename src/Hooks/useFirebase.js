import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isloading, setloading] = useState(true);
    const auth = getAuth();

    const signinUsingGoogle = () => {
        setloading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setloading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setloading(false)
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setloading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setloading(false));

    }

    return {
        user,
        signinUsingGoogle,
        logOut,
        isloading


    }
}
export default useFirebase;