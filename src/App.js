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

  const dummyData = [{
    "attributes": {
        "arrival_time": null,
        "departure_time": null,
        "direction_id": 1,
        "schedule_relationship": null,
        "status": null,
        "stop_sequence": 5
    },
    "id": "prediction-52277330-7097-5",
    "relationships": {
        "route": {
            "data": {
                "id": "743",
                "type": "route"
            }
        },
        "stop": {
            "data": {
                "id": "7097",
                "type": "stop"
            }
        },
        "trip": {
            "data": {
                "id": "52277330",
                "type": "trip"
            }
        },
        "vehicle": {
            "data": {
                "id": "y1106",
                "type": "vehicle"
            }
        }
    },
    "type": "prediction"
}]
  
  return (
    <div className="App">
      <h2>hello</h2>
      {data.map((alert) => (<MBTAAlert alert= {alert}/>))}
      <Twitter/>
      {dummyData.map((data) => (<MBTAPredict data= {data}/>))}
    </div>
  );
}


export default App;

