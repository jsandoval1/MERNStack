import React from 'react';

function InputField({ value, onChange }) {
    return (
        <label htmlFor="resourceId">
            Enter ID:
            <input
                type="number"
                id="resourceId"
                value={value}
                onChange={onChange}
                placeholder="Enter ID..."
            />
        </label>
    );
}

export default InputField;
