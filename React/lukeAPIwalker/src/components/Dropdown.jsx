import React from 'react';

function Dropdown({ onSelectResource }) {
    return (
        <div>
            <label htmlFor="resourceSelect">Person or Planet?</label>
            <select id="resourceSelect" onChange={(event) => onSelectResource(event.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
        </div>
    );
}

export default Dropdown;
