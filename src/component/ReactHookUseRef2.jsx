// UseRef Input element  hook

import { useRef } from "react";

const ReactHookUseRef2 = () => {

    // let firstName = useRef();
    // let lastName = useRef();

    // const change = ()=>{
    //     let fName = firstName.current.value;
    //     let lName = lastName.current.value;

    //     alert(fName + " " + lName);
    // }

    let firstName,lastName = useRef();

    const change = ()=>{
        let fName = firstName.value;
        let lName = lastName.value;

        alert(fName + " " + lName);
    }

    return (
        // <div>
        //     <input ref={firstName} type="text" placeholder="First name"/><br />
        //     <input ref={lastName} type="text" placeholder="First name"/> <br />

        //     <button onClick={change}>Click</button>           
        // </div>


        <div>
            <input ref={(a)=>firstName=a} type="text" placeholder="First name"/><br />
            <input ref={(a)=>lastName=a} type="text" placeholder="First name"/> <br />

            <button onClick={change}>Click</button>           
        </div>

        
    );
};

export default ReactHookUseRef2;