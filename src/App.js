import './App.css';
import MBTAAlert from './components/MBTAAlert'
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.allorigins.win/raw?url=https://cdn.mbta.com/realtime/Alerts.json/')
    .then(response => response.json())
    .then(data =>setData(data.entity.filter(obj => 
      obj.alert.informed_entity.some(ie => ie.route_id === "Blue")
    )));
  },[]);
  
  return (
    <div className="App">
      <h2>hello</h2>
      {data.map((alert) => (<MBTAAlert alert= {alert}/>))}
    </div>
  );
}


export default App;

//twitter keys 
//api key: OvacvXaLNTTRJvozdaokdbgpL
//api secret: 6GtiR48w3py4d1UEaNbZRU9Jj1TZDcolQS2B5vM4GGy2zg3TX0
//bearer token: AAAAAAAAAAAAAAAAAAAAAA2GcgEAAAAAdkzuO0ZJogtsxeODYPOvtlFb3%2F0%3DOqVwyBpwvhcFNmthZhI2jNyMFD2eEQV0pLaXs9DPk9tKxHsi8t