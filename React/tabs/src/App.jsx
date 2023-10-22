import React from 'react';
import Tabs from './components/Tabs';

function App() {
  // Create an array named 'tabsData' containing objects with tab information
  const tabsData = [
    {
      label: 'Tab 1',
      content: 'Content for Tab 1',
      callback: () => console.log('Tab 1 clicked'), 
    },
    {
      label: 'Tab 2',
      content: 'Content for Tab 2',
      callback: () => console.log('Tab 2 clicked'), 
    },
    {
      label: 'Tab 3',
      content: 'Content for Tab 3',
      callback: () => console.log('Tab 3 clicked'), 
    },
  ];

  return (
    <div className="app-container">
      {/* 
      1- Render the 'Tabs' component
      2- Pass the 'tabsData' array as a prop named 'items' 
      */}
      <Tabs items={tabsData} />
    </div>
  );
}

export default App;
