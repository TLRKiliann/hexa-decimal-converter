import React, { useState } from 'react'
import LabelInputComponent from './LabelInputComponent.tsx'
import ResultComponent from './ResultComponent.tsx'
import ButtonComponent from './ButtonComponent.tsx';

export default function CompBinaryDecimal() {
    
    const [value, setValue] = useState<string>("");
    const [result, setResult] = useState<number | undefined>();
  
    const nameValue = "Binary";

    const converterTarget = (event: React.ChangeEvent<HTMLInputElement>) => {
      const etv = event?.target.value;
      setValue(etv);
    }
  
    const convertResult = () => {
      const parser = parseInt(value,2);
      console.log(parser, "parser");
      setResult(parser);
      setValue("");
    }

    return (
        <>
            <div className="labelinput--box">
                <LabelInputComponent 
                    value={value}
                    nameValue={nameValue}
                    converterTarget={(event)=>converterTarget(event)}
                >{nameValue}</LabelInputComponent>
            </div>

            <ButtonComponent convertResult={convertResult} />
            
            <div className="box--result">
                <ResultComponent 
                    result={result}
                />
            </div>
        </>
    )
}
