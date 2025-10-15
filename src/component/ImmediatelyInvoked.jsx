
const ImmediatelyInvoked = () => {
    let status = false;
    return (
        <div>
            {(() => {
                if (status) {
                    return <p>Its true</p>
                } else {
                    return <p>Its false</p>
                }
            })()}    
            {(() => {
                if (status) {
                    return <button>Login</button>
                } else {
                    return <button>Logout</button>
                }
            })()}          
        </div>
    );
};

export default ImmediatelyInvoked;