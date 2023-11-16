import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getToken } from "firebase/messaging";
import { messaging, app } from "./firebase";
import Signup from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app)

function App() {



  useEffect(() =>{
    onAuthStateChanged(auth, user=>{
      if(user){
        // logged in 
        console.log(`hello ${user}`)
        setUser(user)
      }
      else{
        // no logged in user
        console.log(`you are logged out`)
        setUser(null)
      }
    })
  },[])
  
  const [user,setUser] = useState(null);

  async function requestPermission() {



    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // generate token
      const token = await getToken(messaging, {
        vapidKey:
          "BPJBPsnssWETrsmbqpYpbPYSPKG8wpBiEZIREP5K4biVODdD1sKbKlxYG5iIL7kbdk0aGRN1AVQiKn6m0G1ycFs",
      });
      console.log("TOKEN gEN", token);
    } else {
      alert("you denied for the notification");
    }
  }

  useEffect(() => {
    // req user for notification permission
    requestPermission();
  }, []);

  if(user===null){
  return <div className="App">
    <Signup/>
    <Signin/>
  </div>;
}else{
  return<div>
    <h1>{user.email}</h1>
    <button onClick={()=>signOut(auth)}>LOGOUT</button>
  </div>
}

}

export default App;
