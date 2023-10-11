import React, { useState } from 'react'
import LabelInputComponent from './LabelInputComponent.tsx'
import ResultComponent from './ResultComponent.tsx'
import ButtonComponent from './ButtonComponent.tsx';

export default function CompBinaryDecimal() {
    
    const [value, setValue] = useState<string>("Binary");
    const [result, setResult] = useState<number | undefined>();
  
    const converterTarget = (event: React.ChangeEvent<HTMLInputElement>) => {
      const etv = event?.target.value;
      setValue(etv);
    }
  
    const convertResult = () => {
      const binConv = parseInt(value,2);
      console.log(binConv, "binConv");
      setResult(binConv);
      setValue("");
    }

    return (
        <>
            <div className="labelinput--box">
                <LabelInputComponent 
                    value={value}
                    converterTarget={(event)=>converterTarget(event)}
                >{value}</LabelInputComponent>
            </div>

            <ButtonComponent convertResult={convertResult} />
            
            <div className="box--binary--result">
                <ResultComponent 
                    result={result}
                />
            </div>
        </>
    )
}
