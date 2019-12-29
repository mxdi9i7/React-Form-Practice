import React, { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';
import './App.css';

function App() {
  const [ users, setUsers ] = useState([ 'Peter', 'Linsen' ]);
  const [ input, setInput ] = useState('');

  function handleRemoveUser(i) {
    const nextUsers = [ ...users ];
    nextUsers.splice(i, 1);
    setUsers(nextUsers);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  function submitName() {
    if (input !== '') {
      const nextUsers = [ ...users ];
      nextUsers.push(input);
      setUsers(nextUsers);
      setInput('');
    }
  }

  return (
    <div>
      <List handleRemoveUser={handleRemoveUser} data={users} />
      <Form handleSubmit={submitName} input={input} handleInput={handleInput} />
    </div>
  );
}

export default App;
