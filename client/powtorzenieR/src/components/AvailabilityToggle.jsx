import React, { useState } from 'react'

export const AvailabilityToggle = () => {

  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div>
        <h1 className={`availabilityH1 ${isAvailable ? "available" : "unavailable"}`}>
            {isAvailable ? "Dostępny" : "Niedostępny"}
        </h1>
        <button onClick={() => setIsAvailable(!isAvailable)}>{isAvailable  ? "Wyłącz" : "Włącz"}</button>
    </div>
  )
}
