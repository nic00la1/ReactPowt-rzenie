import React from 'react'

export const DisplayNameAndSurnameByProps = ({ person }) => {
  return (
    <div>
      <p>{person.name} {person.surname}</p>
    </div>
  )
}
