import React, { useState } from 'react'
import CompLabelInput from './subcomponents/CompBinaryDecimal/CompLabelInput.tsx'
import CompResultBinaryDecimal from './subcomponents/CompBinaryDecimal/CompResultBinaryDecimal.tsx'

export default function CompBinaryDecimal() {
    const [binary, setBinary] = useState<string>("");
    const [result, setResult] = useState<number | undefined>();
  
    const convertToBinary = (event: React.ChangeEvent<HTMLInputElement>) => {
      const etv = event?.target.value;
      setBinary(etv);
    }
  
    const convertResult = () => {
      const binConv = parseInt(binary,2);
      console.log(binConv, "binConv");
      setResult(binConv);
      setBinary("");
    }

    return (
        <div>
            <div className="labelinput--box">
                <CompLabelInput 
                    binary={binary}
                    convertToBinary={(event)=>convertToBinary(event)}
                />
            </div>

            <button type="button" onClick={convertResult}>Convert</button>
            
            <div className="box--binary--result">
                <CompResultBinaryDecimal 
                    result={result}
                />
            </div>
        </div>
    )
}
