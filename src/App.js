import './App.css';
import MBTAAlert from './components/MBTAAlert'
import Twitter from './components/Twitter'
import MBTAPredict from './components/MBTAPredict';
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

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch("https://api-v3.mbta.com/predictions?page%5Blimit%5D=2&sort=arrival_time&filter%5Bdirection_id%5D=1&filter%5Broute_type%5D=3&filter%5Broute%5D=743&filter%5Bstop%5D=place-aport")
  .then(response => response.json())
  .then(res => setSchedule(res.data))
  .catch(error => console.log('error', error));
  }, [])

 

  const [traffic, setTraffic] = useState([]);

 
  useEffect(() => {
      fetch("https://uglte8qxlf.execute-api.us-east-1.amazonaws.com/dev/moin/travelTimeWork")
    .then(response => response.json())
    .then(res => setTraffic(res))
    .catch(error => console.log('error', error));
  }, []);
  
  return (
    <div className="App">
      <div className="prediction">
      <h2 id="headers">Airport to South Station SL3 Arrival Times</h2>
      {schedule.map((data) => (<MBTAPredict data= {data}/>))}
      </div>

      <Twitter/>

     

      <div className="alert">
        <h2 id="headers">Blue Line Alerts</h2>
      {data.map((alert) => (<MBTAAlert alert= {alert}/>))}
      </div>
    </div>
  );
}


export default App;

