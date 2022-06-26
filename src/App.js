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

