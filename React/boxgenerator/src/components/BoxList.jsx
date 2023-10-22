import React from 'react';
import Box from './Box';

// Destructuring props {boxes, color, size, onColorChange, onSizeChange, onBoxSubmit}
function BoxList({
    boxes,
    color,
    size,
    onColorChange,
    onSizeChange,
    onBoxSubmit, }) {
    const handleSubmit = (e) => {
        e.preventDefault(); //Prevent Page Refresh

        // Check if the color is empty, or value of color to newColor
        const newColor = color === '' ? 'defaultColor' : color;

        // Creates new object called newBox: color and size. color is set to the value of newColor 
        const newBox = { color: newColor, size };

        // Submits the new box
        onBoxSubmit(newBox);

        // Used to clear the color input field AFTER the form is submitted
        onColorChange({ target: { value: '' } });

        // Reset the size input to the default value (100)
        onSizeChange({ target: { value: 100 } });
    };

    // CSS to display boxes horizontally
    const boxContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="colorInput">Color:</label>
                    <input
                        type="text"
                        id="colorInput"
                        value={color}
                        onChange={onColorChange} // Update the color state in the parent component
                    />
                </div>
                <div>
                    <label htmlFor="sizeInput">Size (px):</label>
                    <input
                        type="number"
                        id="sizeInput"
                        value={size}
                        onChange={onSizeChange} // Update the size state in the parent component
                    />
                </div>
                <button
                    type="submit"
                    style={{ fontFamily: 'Gabarito'}}
                >
                    Add Box
                </button>
            </form>
            {/* Applying style and mapping boxes */}
            <div style={boxContainerStyle} className="box-container">
                {boxes.map((box, index) => (
                    <Box
                        key={index}
                        color={box.color}
                        size={box.size}
                    />
                ))}
            </div>
        </div>
    );
}

export default BoxList;
