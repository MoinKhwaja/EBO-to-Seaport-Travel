export default function Traffic(props) {
    
    console.log(props)
    
    return(

        <div>
            <p>{JSON.stringify((props.data[0].resources[0].travelDurationTraffic)/60)} minutes driving</p>
            <p>{JSON.stringify(props.data[0].resources[0].trafficCongestion)} traffic</p>
        </div>
    )
}