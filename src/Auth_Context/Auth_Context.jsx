import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase_Config";

export const userContext = createContext(null);

const auth = getAuth(app)

const Auth_Context = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Create New Account
    const createAccount = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    // Name Added Profile
    const nameUpdate = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: null
        })
    }

    // SendEmailVerification
    const emailVerification = () => {
       return sendEmailVerification(auth.currentUser);
    }

    // Google Provider
    const googleSingUp = () => {
       return signInWithPopup(auth, googleProvider);
    }

    // GitHub Provider
    const githubSingUp = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // Login In User
    const singInUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    // Forget Password
    const forgetPassword = (email) => {
       return sendPasswordResetEmail(auth, email)
    }

    // Log Out
    const logOut = () => {
       return signOut(auth);
    }

    // On Auth State Changed
    useEffect(() => {
       const disConnect = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => disConnect();
    }, [])

    // Auth Info
    const authInfo = {
        createAccount,
        nameUpdate,
        emailVerification,
        singInUser,
        forgetPassword,
        googleSingUp,
        githubSingUp,
        logOut,
        user,
        loading
    };

    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default Auth_Context;