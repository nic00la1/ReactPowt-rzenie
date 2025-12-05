import './App.css'
import { NicolaKaleta } from './components/NicolaKaleta'
import { DisplayNameAndSurnameByProps } from './components/DisplayNameAndSurnameByProps'
import { DisplayDataFromTableByProps } from './components/DisplayDataFromTableByProps'
import { DisplayObjectsFromTableByProps } from './components/DisplayObjectsFromTableByProps';
import React, { useState } from 'react'; 
import { DisplayButton } from './components/DisplayButton';

function App() {

// Do komponentu 4   
const [info, setInfo] = useState("");

// Do komponentu 5
const [showAnimals, setShowAnimals] = useState(true);
const [showButtons, setShowButtons] = useState(true);

const zwierzeta = ["lew", "kot", "tygrys", "pantera", "pies"];

const zwierzetaObiekty = [
  {Zwierzeta: "lew", ilosc: 2},
  {Zwierzeta: "kot", ilosc: 5},
  {Zwierzeta: "tygrys", ilosc: 1},
  {Zwierzeta: "pantera", ilosc: 3},
  {Zwierzeta: "pies", ilosc: 4},
];

  return (
    <>
     {/* Info na samej górze */}
    <h1 className='info-center'>Aktualne dane z info: {info}</h1>

    <button onClick={() => setShowAnimals(!showAnimals)}>
      {showAnimals ? "Ukryj listę zwierząt" : "Pokaż listę zwierząt"}
    </button>
    <button onClick={() => setShowButtons(!showButtons)}>
      {showButtons ? "Ukryj literki" : "Pokaż literki"}
    </button>

    <div className='container'>
      <NicolaKaleta/>
      <DisplayNameAndSurnameByProps person={{
        name: 'Nicola',
        surname: 'Kaleta'
      }}/>
      {showAnimals &&
        <DisplayDataFromTableByProps items={zwierzeta}/>
      }
      <DisplayObjectsFromTableByProps animals={zwierzetaObiekty} />
      {showButtons &&
        <DisplayButton info={info} setInfo={setInfo}/>
      }
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
    </>
  )
}

export default App
