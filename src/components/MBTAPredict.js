//grab MBTA prediction and displays it

export default function MBTAPredict({ data }) {

    console.log(data);
    return (
        <div>
            <p>Departure Time: {data.attributes.departure_time}</p>
            <p>Arrival Time: {data.attributes.arrival_time}</p>
            <p>Stop: {data.relationships.stop.data.id}</p>
            <p>Inbound</p>
        </div>
    );
};