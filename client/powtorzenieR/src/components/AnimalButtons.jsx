import React, { useState } from 'react'

const AnimalButtons = ({ animals }) => {

const [animalList, setAnimalList] = useState(animals);

const handleClick = (index) => {
    const newList = [...animalList];
    newList[index].ilosc += 1;
    setAnimalList(newList);
}

  return (
    <div>
        {animalList.map((animal, index) => (
            <button key={index} onClick={() => handleClick(index)}>
                {animal.Zwierzeta} ({animal.ilosc})
            </button>
        ))}
    </div>
  )
}

export default AnimalButtons
