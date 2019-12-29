import React from 'react';

export default function Item({ index, name, handleRemoveUser }) {
  return (
    <div className='item'>
      <h1>{name}</h1>
      <button
        onClick={() => {
          handleRemoveUser(index);
        }}
      >
        X
      </button>
    </div>
  );
}
