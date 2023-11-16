import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { app } from '../firebase';


const auth = getAuth(app);

export const Signin = () => {

    const [email,setEmail] = useState("");
  const [password,setPassword] = useState('')

  const signIn  =()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((value)=> alert("success"))
    .catch((error)=>alert('wrong email and pass'))
  }
  return (
    <div>
         <h1>SIgnin PAGE</h1>
        <label>Email</label>
        <input  onChange={e => setEmail(e.target.value)} value = {email} type='email' required placeholder='Enter your email'></input>
        <label>password</label>
        <input  onChange={e => setPassword(e.target.value)} value = {password} type='password' required placeholder='Enter your password'></input> 
        <button onClick={signIn}>Signup</button>
    </div>
  )
}
