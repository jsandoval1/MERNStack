import React, { useState } from "react";
import PersonCard from "./PersonCard";

// "ages" is a piece of state that represents the ages of people
// "setAges" changes the ages data
const PeopleList = () => {
    const [ages, setAges] = useState({
        Nathan: 25,
        John: 23,
        Shawn: 42,
        Ryan: 25,
    });

// Function "handleBirthday"
    // takes one argument= name
        // setAges (from useState) is used to update the ages state
            // creates a new object = copy of the current ages state ({ ...ages (#) })
                // increments the age by name by adding 1 ([name]: ages[name] + 1).
    const handleBirthday = (name) => {
        setAges({ ...ages, [name]: ages[name] + 1 });
    };

    return (
        <div className="PeopleList">
            <PersonCard
                name="Nathan Green"
                age={ages.Nathan}
                hairColor={"Black"}
                onBirthday={() => handleBirthday("Nathan")}
            />

            <PersonCard
                name="John Sandoval"
                age={ages.John}
                hairColor={"Brown"}
                onBirthday={() => handleBirthday("John")}
            />

            <PersonCard
                name="Ryan Cain"
                age={ages.Ryan}
                hairColor={"Black"}
                onBirthday={() => handleBirthday("Ryan")}
            />
        </div>
    );
};

export default PeopleList;
