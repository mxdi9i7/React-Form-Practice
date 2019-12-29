import React from 'react';

export default function Form({ input, handleSubmit, handleInput }) {
  return (
    <div>
      <input value={input} onChange={handleInput} type='text' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
