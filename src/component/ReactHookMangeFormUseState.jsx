import { useState } from "react";

const ReactHookMangeFormUseState = () => {
    let [FormObj,setFormObj]=useState({ fName: "", lName: "", city: "", gender: "" });


    const InputOnChange = (property,value) => {
        setFormObj(prevObj => ({
            ...prevObj,
            [property]: value            
        }))
    }

    const FormSubmit =(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
        console.log(FormObj);
        alert(JSON.stringify(FormObj));
    }



    return (
        <div className="container">
            <h1>From Manage Use State</h1>
            <form onSubmit={FormSubmit}>
                <input onChange={(e)=>{InputOnChange("fName",e.target.value)}} value={FormObj.fName} type="text" placeholder="First Name" /><br />
                <input onChange={(e)=>{InputOnChange("lName",e.target.value)}} value={FormObj.lName} type="text" placeholder="Last Name" /><br />
                <select onChange={(e)=>{InputOnChange("city",e.target.value)}} value={FormObj.city}>
                    <option value="">Choose City </option>
                    <option value="Dhaka">Dhaka </option>
                    <option value="Rangpur">Rangpur </option>
                    <option value="Feni">Feni </option>
                </select>
                <br />
                <input onChange={()=>{InputOnChange("gender",'Male')}} checked={FormObj.gender==="Male"} type="radio" name="gender" />Male<br />
                <input onChange={()=>{InputOnChange("gender",'Female')}}  checked={FormObj.gender==="Female"} type="radio" name="gender" />Female<br />

                <button type="submit">Submit</button>

            </form>

        </div>
    );
};

export default ReactHookMangeFormUseState;