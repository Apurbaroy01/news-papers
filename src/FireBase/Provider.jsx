import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthConText = createContext();
const Provider = ({ children }) => {
    const [user, setUser] = useState();
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const createusertGoogle = () => {
       return signInWithPopup(auth, provider)
    };
    const signOutUser = () => {
        return signOut(auth)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user', currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe;
        };
    }, []);


    const AuthInfo = {
        createUser,
        signIn,
        createusertGoogle,
        user,
        signOutUser
    }
    return (

        <div>
            <AuthConText.Provider value={AuthInfo}>
                {children}
            </AuthConText.Provider>
        </div>
    );
};

export default Provider;