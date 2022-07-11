//Take in a single alert and displays it

function MBTAAlert(props) {
    return (
        <div>   
        <p>{props.alert.alert.header_text.translation[0].text}</p>
        <p>{props.alert.alert.description_text.translation[0].text}</p>
        </div>) 
};

export default MBTAAlert;