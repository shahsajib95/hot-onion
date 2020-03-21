import React from 'react';


const Lunch = (props) => {
console.log(props.lunch.name);

    return (
        <div className="main">
           <h1>This is lunch</h1>
        </div>
    );
};

export default Lunch;