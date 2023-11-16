import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import React, { useState } from 'react'

const auth = getAuth(app);

export const Signup = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState('')

  const createUser  =()=>{
    createUserWithEmailAndPassword(auth,email,password).then((value)=> alert("success"))
  }

  return (
    <div className='signup-page'>
      <h1>signup PAGE</h1>
        <label>Email</label>
        <input  onChange={e => setEmail(e.target.value)} value = {email} type='email' required placeholder='Enter your email'></input>
        <label>password</label>
        <input  onChange={e => setPassword(e.target.value)} value = {password} type='password' required placeholder='Enter your password'></input> 
        <button onClick={createUser}>Signup</button>
    </div>
  )
}

export default Signup;
