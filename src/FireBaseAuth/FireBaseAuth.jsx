import { createUserWithEmailAndPassword, deleteUser, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebaseAuthProvider';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthProvider = createContext()
const FireBaseAuth = ({ children }) => {
    const [user, setUser] = useState(null)
    const [successful, setSuccessful] = useState(false)
    const [loding, setLoding] = useState(true)
    // console.log(user)
    const signUp = (email, password, photoURL) => {
        setLoding(true)

        return createUserWithEmailAndPassword(auth, email, password, photoURL)
    }

    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setLoding(false)
            setSuccessful(true)
            setUser(currentUser)
        })
        return () => {
            unSubscribe
        }
    }, [])

    const userSignOut = () => {
        setSuccessful(false)
        return signOut(auth)
    }
    const deleteUserId = () => {
        const user = auth.currentUser
        return deleteUser(user)
    }

    // Login with google----------------

    const provider = new GoogleAuthProvider()
    // console.log(provider)
    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    // login with git hub--------------------
    const providerGitHub = new GithubAuthProvider()
    // console.log(providerGitHub)
    const loginWithGitHub = () => {
        return signInWithPopup(auth, providerGitHub)
    }

    const data = {
        signUp,
        signIn,
        userSignOut,
        loginWithGoogle,
        loginWithGitHub,
        deleteUserId,
        successful,
        setSuccessful,
        loding,
        user,
        setUser
    }
    return (
        <AuthProvider.Provider value={data}>
            {children}
        </AuthProvider.Provider>
    );
};

export default FireBaseAuth;