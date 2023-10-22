import React, { useState } from 'react';
import './Tabs.css';

// Component named 'Tabs' accepts 'items' as a prop
const Tabs = ({ items }) => {
    // Initialize 'activeTab' with an initial value of 0, this makes the first tab default to being activated (index 0)
    const [activeTab, setActiveTab] = useState(0);

    // Function 'handleTabClick'
    const handleTabClick = (index, callback) => {
        setActiveTab(index); // Set the 'activeTab' state to the 'index' argument
        callback(); // Fire the callback function
        
    };

    return (
        <div className="tabs-container">
            <ul className="tab-headers">
                {items.map((item, index) => ( // Create a list item for each item in 'items'
                    <li
                    key={index} 
                    className={index === activeTab ? 'active' : ''}
                    onClick={() => handleTabClick(index, item.callback)}
                    >
                    {item.label} {/* Access the label from item */}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {items.map((item, index) => (
                    
                    <div // Create a <div> for each item in 'items'
                    key={index}
                    className={index === activeTab ? 'active' : ''}
                    >
                    {item.content} {/* Access the content from item */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
