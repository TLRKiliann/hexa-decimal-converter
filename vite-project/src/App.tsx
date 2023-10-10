import { useState } from 'react'
import ComponentLabInput from './components/ComponentLabInput.tsx'
import ComponentBinResult from './components/ComponentBinResult.tsx'
import './App.css'

function App() {

  const [binary, setBinary] = useState<string>("");
  const [result, setResult] = useState<number | undefined>();
  const [itemToggle, setItemToggle] = useState<boolean>(false);

  const convertToBinary = (event: React.ChangeEvent<HTMLInputElement>) => {
    const etv = event?.target.value;
    setBinary(etv);
  }

  const convertResult = () => {
    setItemToggle(itemToggle => !itemToggle);
    const binConv = parseInt(binary,2);
    console.log(binConv, "binConv");
    setResult(binConv);
    setBinary("");
  }

  return (
    <>
      <h1>Converter</h1>

      <h2>Converter binary to decimal:</h2>

      <div className="container--binary">

        <div className="labelinput--box">
          <ComponentLabInput 
            binary={binary}
            convertToBinary={(event)=>convertToBinary(event)}
          />
        </div>

        <button type="button" onClick={convertResult}>Convert</button>
        
        <div className="box--binary--result">
          <ComponentBinResult 
            itemToggle={itemToggle}
            result={result}
            binary={binary}
          />
        </div>
      
      </div>
    </>
  )
}

export default App
