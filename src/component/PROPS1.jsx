
import PROPS2 from './PROPS2';

const PROPS1 = (props) => {
    const ItemObj = {
        title: "Learn React with Bite",
        price: 1000,
        description: "This is a course for beginners to learn React"
    }

    return (
        <div>
            <h2>Props1 Recived string:</h2>
            <h5>{props.title }</h5>  
            <h5>{props.des }</h5>  
            <h2>&& Sent Object--</h2>       
            <PROPS2 item = {ItemObj} />  
        </div>
    );
};

export default PROPS1;