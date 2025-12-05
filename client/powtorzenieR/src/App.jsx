import './App.css'
import { NicolaKaleta } from './components/NicolaKaleta'
import { DisplayNameAndSurnameByProps } from './components/DisplayNameAndSurnameByProps'
import { DisplayDataFromTableByProps } from './components/DisplayDataFromTableByProps'

function App() {

const zwierzeta = ["lew", "kot", "tygrys", "pantera", "pies"];
  
  return (
    <>
    <div className='container'>
      <NicolaKaleta/>
      <DisplayNameAndSurnameByProps person={{
        name: 'Nicola',
        surname: 'Kaleta'
      }}/>
      <DisplayDataFromTableByProps/>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
    </>
  )
}

export default App
