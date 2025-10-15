import React from 'react';

const PROPS3 = (props) => {
    function Demos(){
        alert('Clicked')
    }
    return (
        <div>
            <h1>PROPS3 Recived Fuction</h1>  
            <button onClick={props.childBtnClick}>Click Me</button> 
            <h1>Managing Click Event</h1>
            {/* <button onClick ={alert('Clicked')}>Submit</button> */}
            <h1>Managing Click Event</h1>
            <button onClick ={()=>{
                alert('Clicked')
            }}>Submit click</button>
            <h1>Managing Click Event Reguler Function</h1>
            <button onClick ={
                function Demo(){
                    alert('Clicked')
                }
            }>Regular Function click</button>

            <h1>Managing Click Event Others Function</h1>
            <button onClick ={Demos}>Function click</button>


        </div>
    );
};

export default PROPS3;