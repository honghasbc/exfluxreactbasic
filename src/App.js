import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content.jsx';
import Table from './components/Table/Table.jsx';

function App() {
  return (
    <div className="App">      
        <Content text="A simple flux implementation with React" />
        <Table headerTableText="A simple flux implementation with React" /> 
    </div>
  );
}

export default App;