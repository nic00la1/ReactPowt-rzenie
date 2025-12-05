import React from 'react'

export const DisplayDataFromTableByProps = ({ items }) => {
  
  const listItems = items.map(zwierze => 
    <li>{zwierze}</li>
  );

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}
