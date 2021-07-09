import { createContext, useState } from 'react';
import Router from 'next/router';
import firebase from '../lib/firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signin = async () => {
        try {
            setLoading(true);
            return await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then((response) => {
                    setUser(response.user);
                    Router.push('/dashboard');
                });
        } finally {
            setLoading(false);
        }
    }

    const signinFace = async () => {
        try {
            setLoading(true);
            return await firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
                .then((response) => {
                    setUser(response.user);
                    Router.push('/dashboard');
                });
        } finally {
            setLoading(false);
        }
    }


    const signout = () => {
        try {
            Router.push('/');

            return firebase
                .auth()
                .signOut()
                .then(() => setUser(false));
        } finally {
            setLoading(false);
        }
    }


    return <AuthContext.Provider value={{
        user,
        loading,
        signin,
        signinFace,
        signout
    }}>{children}</AuthContext.Provider>;
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;