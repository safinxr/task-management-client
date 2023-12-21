import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase.config'

export const ContextAuth = createContext(null)

const Context = ({ children }) => {

    const [user, setUser] = useState(null)
    const [shortLoading, setShortLoading] = useState(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setShortLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const emailPassSignUp = (email, password) => {
        setShortLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const upProfile = (name) => {
        setShortLoading(true)
        return updateProfile(auth.currentUser, { displayName: name })
    }
    const upProfileImg = (name, imgUrl) => {
        setShortLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: imgUrl })
    }



    const emailPassSignIn = (email, password) => {
        setShortLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const setLoading = (x) => {
        setShortLoading(x)
    }
    const alu = 'ab';

    const contextValue = {
        emailPassSignUp,
        emailPassSignIn,
        googleSignIn,
        logOut,
        upProfile,
        shortLoading,
        setLoading,
        user,
        alu,
        upProfileImg


    }
    return (
        <ContextAuth.Provider value={contextValue}>
            {children}
        </ContextAuth.Provider>
    );
};

export default Context;