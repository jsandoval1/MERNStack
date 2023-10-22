import React from "react";

const PersonCard = (props) => {
    const {name, age, hairColor} = props
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}:</p>
        </div>
    );
}
export default PersonCard