

const city = ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barishal', 'Rangpur', 'Mymensingh'];
const Loop = () => {
    return (
        <div>
            {/* <ol>
                {
                    city.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ol>     */}

            <ol>
                {
                    city.map((item, index) => {
                        return <li>{item}</li>
                    })
                }
            </ol>         
        </div>
    );
};

export default Loop;