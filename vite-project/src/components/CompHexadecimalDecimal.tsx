import React, { useState } from 'react'
import LabelInputComponent from './LabelInputComponent.tsx'
import ResultComponent from './ResultComponent.tsx'
import ButtonComponent from './ButtonComponent.tsx';

export default function CompHexadecimalDecimal() {
    
    const [value, setValue] = useState<string>("hexadecimal");
    const [result, setResult] = useState<number | undefined>();
  
    const converterTarget = (event: React.ChangeEvent<HTMLInputElement>) => {
      const etv = event?.target.value;
      setValue(etv);
    }
  
    const convertResult = () => {
      const hexaConv = parseInt(value,16);
      console.log(hexaConv, "hexaConv");
      setResult(hexaConv);
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
