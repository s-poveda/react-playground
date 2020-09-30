import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './state-drills/Accordion';

function App() {
  return (
    <div>
      <Accordion
        sections={[
          {
            title: 'First title',
            content: 'First Content'
          },
          {
            title: 'Second title',
            content: 'Second Content'
          },
          {
            title: 'Third title',
            content: 'Third Content'
          }
        ]} />
    </div>
  );
}

export default App;
