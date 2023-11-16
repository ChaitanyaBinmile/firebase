import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getToken} from 'firebase/messaging'
import {messaging,app} from "./firebase"
import {getDatabase ,ref,set} from 'firebase/database'
import {useFirebase} from "./context/Firebase"

const db = getDatabase(app);

function App() {

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')


  const firebase = useFirebase();
  console.log(firebase)

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // generate token
     const token = await getToken(messaging,{ vapidKey:'BPJBPsnssWETrsmbqpYpbPYSPKG8wpBiEZIREP5K4biVODdD1sKbKlxYG5iIL7kbdk0aGRN1AVQiKn6m0G1ycFs'})
     console.log('TOKEN gEN',token);
    } else {
      alert("you denied for the notification");
    }
  }

  useEffect(() => {
    // req user for notification permission
    requestPermission();
  }, []);
  return (
    <div className="App">
     <h1>firebase</h1>
     <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Enter Email"/>
     <input onChange={(e)=> setPassword(e.target.value)} value={password}  type="password" placeholder="Enter Password"/>
     <button onClick={()=>{
      firebase.signupUser(email,password)
      firebase.putData("users/" + "email", {email,password})
      }}>SignUP</button>
      <button onClick={()=>firebase.signUpWithGoogle()}>Sign in with google</button>
    </div>
  );
}

export default App;
