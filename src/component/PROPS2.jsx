
import PROPS3 from './PROPS3';

const PROPS2 = (props) => {
    const BtnClick = () => {
        alert('Button Clicked');
    }
    return (
        <div>
            <h2>Props2 Recived Object: </h2>  
            <ul>
                <li>title:{props.item.title}</li>
                <li>price:{props.item.price}</li>
                <li>description:{props.item.description}</li>
            </ul>    
            <h2>&& Sent Passing Function--</h2>    
            <PROPS3 childBtnClick={BtnClick} />
        </div>
    );
};

export default PROPS2;