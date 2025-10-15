

const LogicalAnd = () => {
    let status = true;
    return (
        <div>
            <h1>Login Status</h1>     
            {status && <button>User is logged in</button>}       
        </div>
    );
};

export default LogicalAnd;