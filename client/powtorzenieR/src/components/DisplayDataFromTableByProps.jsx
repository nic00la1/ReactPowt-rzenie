import React from 'react'

export const DisplayDataFromTableByProps = ({ items }) => {

  
  const listItems = items.map((zwierze, index) => 
    <li key={index}>{zwierze}</li>
  );

  return (
    <div>
      <h4>Zwierzęta</h4>
      <ul>{listItems}</ul>
    </div>
  )
}
