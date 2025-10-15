

const FromSubmit = () => {
    const PostFormData  =(event)=>{
        event.preventDefault();
        alert('From Submitted');       
    }

    return (
        <div>
            <form onSubmit={PostFormData}>
                <label>Name:</label>
                <input type="text" placeholder="Your Name" />   
                <button type = "submit">Submit</button>         
            </form>            
        </div>
    );
};

export default FromSubmit;