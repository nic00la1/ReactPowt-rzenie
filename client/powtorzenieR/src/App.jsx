import './App.css'
import { NicolaKaleta } from './components/NicolaKaleta'
import { DisplayNameAndSurnameByProps } from './components/DisplayNameAndSurnameByProps'
import { DisplayDataFromTableByProps } from './components/DisplayDataFromTableByProps'
import { DisplayObjectsFromTableByProps } from './components/DisplayObjectsFromTableByProps';
import React, { useState } from 'react'; 
import { DisplayButton } from './components/DisplayButton';
import { ControlPanel } from './components/ControlPanel';
import { AvailabilityToggle } from './components/AvailabilityToggle';
import AnimalButtons from './components/AnimalButtons';
import DisplayImages from './components/DisplayImages';

function App() {

// Do komponentu 4   
const [info, setInfo] = useState("");

// Do komponentu 5
const [showAnimals, setShowAnimals] = useState(true);
const [showButtons, setShowButtons] = useState(true);
const [showPanel, setShowPanel] = useState(true);

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
        { showPanel &&
      <ControlPanel showAnimals={showAnimals}
                  setShowAnimals={setShowAnimals}
                  showButtons={showButtons}
                  setShowButtons={setShowButtons}
                  showPanel={showPanel}
                  setShowPanel={setShowPanel}/>
    }
    
      <AvailabilityToggle/>
      <AnimalButtons animals={zwierzetaObiekty}/>
      <DisplayImages/>
    </div>
    </>
  )
}

export default App
