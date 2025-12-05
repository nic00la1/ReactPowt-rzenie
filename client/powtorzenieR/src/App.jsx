import './App.css'
import { NicolaKaleta } from './components/NicolaKaleta'
import { DisplayNameAndSurnameByProps } from './components/DisplayNameAndSurnameByProps'
import { DisplayDataFromTableByProps } from './components/DisplayDataFromTableByProps'
import { DisplayObjectsFromTableByProps } from './components/DisplayObjectsFromTableByProps';
import React, { useState } from 'react'; 

function App() {

// Do komponentu 4   
const [info, setInfo] = useState("");

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
    <h1>{info}</h1>

    <div className='container'>
      <NicolaKaleta/>
      <DisplayNameAndSurnameByProps person={{
        name: 'Nicola',
        surname: 'Kaleta'
      }}/>
      <DisplayDataFromTableByProps items={zwierzeta} />
      <DisplayObjectsFromTableByProps animals={zwierzetaObiekty} />
      
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
    </>
  )
}

export default App
