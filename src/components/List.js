import React from 'react';
import Item from './Item';

export default function List({ data, handleRemoveUser }) {
  return (
    <div>
      {/* {data.map(function(value) {
        return <h1>{value}</h1>;
      })} */}
      {data.map((value, i) => <Item handleRemoveUser={handleRemoveUser} index={i} name={value} />)}
    </div>
  );
}
