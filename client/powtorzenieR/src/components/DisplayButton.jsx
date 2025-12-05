import React from 'react'

export const DisplayButton = ( {info, setInfo} ) => {
  return (
    <div>
        <p>Aktualne dane z info: {info}</p>
        <div>
            <button onClick={() => setInfo("O")}>O</button>
            <button onClick={() => setInfo("A")}>A</button>
            <button onClick={() => setInfo("K")}>K</button>
        </div>
        
    </div>
  )
}
