import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { getToken} from 'firebase/messaging'
import {messaging,app} from "./firebase"
import {getDatabase ,ref,set} from 'firebase/database'

const db = getDatabase(app);

function App() {

  const putData = () =>{
    set(ref(db,'users'),{
      id:1,
      name:'chaitanya',
      age:23
    });
  }

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
     
      <button onClick={putData}>
        PUTdata
      </button>
    </div>
  );
}

export default App;
