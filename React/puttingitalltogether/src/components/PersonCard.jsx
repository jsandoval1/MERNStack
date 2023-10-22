import React from "react";

const PersonCard = ({ name, age, hairColor, onBirthday }) => {
    return (
        <div className="PersonCard">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={onBirthday}>Celebrate Birthday</button>
        </div>
    );
};

export default PersonCard;
