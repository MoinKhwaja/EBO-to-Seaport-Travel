//grab MBTA prediction and displays it

export default function MBTAPredict({ data }) {

    console.log(data);
    const now = new Date();

    return (
        <div>
            <p>Arrival Time: {Math.floor(Math.abs((new Date(data.attributes.arrival_time) - now))/60000)} min</p>
        </div>
    );
};