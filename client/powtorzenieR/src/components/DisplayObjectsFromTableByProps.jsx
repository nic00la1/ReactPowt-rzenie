import React from 'react'

export const DisplayObjectsFromTableByProps = ({  animals }) => {
  return (
    <div>
        {/* Lista zwierząt z obowiązkowym polem ilość */}
        <ul>
            <h4>Zwierzęta</h4>
           {animals.map((animal, index) => ( 
                <li key={index}>
                    {animal.Zwierzeta} - Ilość: {animal.ilosc}
                </li>
            ))}
        </ul>
    </div>
  )
}
