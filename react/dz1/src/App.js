import React from 'react';
import Message from './components/Message';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Мое React-приложение</h1>
      <Message text="Привет, это мое первое сообщение!" />
      <Message text="React — это круто!" />

    </div>
  );
}

export default App;