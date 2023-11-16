import React, { createContext, useContext } from 'react'
import { app } from '../firebase';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth'
import { getDatabase, ref, set} from 'firebase/database'
 
const FirebaseContext = createContext(null);

const FirebaseApp = app;
const database = getDatabase(FirebaseApp)

const firebaseAuth = getAuth(FirebaseApp)

const googleProvider = new GithubAuthProvider();

export const useFirebase = () =>useContext(FirebaseContext)

export const FirebaseProvider = (props) => {
    
    const signUpWithGoogle = () => {
        signInWithPopup(firebaseAuth,googleProvider)
    }
    
    const signupUser = ( email, password) =>{
       createUserWithEmailAndPassword( firebaseAuth,email,password)
    }

    const putData = (key,data) =>{
        set(ref(database,key), data)
    }

  return (
    <FirebaseContext.Provider value={{signupUser,putData,signUpWithGoogle}}>
        {props.children}
    </FirebaseContext.Provider>
  )
}
