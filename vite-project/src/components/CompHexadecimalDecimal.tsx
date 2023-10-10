import React, { useState } from 'react'
import CompLabelInputHexadecimal from './subcomponents/CompHexaDecimalDecimal/CompLabelInputHexadecimal.tsx'
import CompResultHexadecimal from './subcomponents/CompHexaDecimalDecimal/CompResultHexadecimal.tsx'

export default function CompHexadecimalDecimal() {
    const [hexadecimal, setHexadecimal] = useState<string>("");
    const [resultHexa, setResultHexa] = useState<number | undefined>();
  
    const converterTarget = (event: React.ChangeEvent<HTMLInputElement>) => {
      const etv = event?.target.value;
      setHexadecimal(etv);
    }
  
    const convertResult = () => {
      const hexaConv = parseInt(hexadecimal,16);
      console.log(hexaConv, "hexaConv");
      setResultHexa(hexaConv);
      setHexadecimal("");
    }

    return (
        <div>

            <div className="labelinput--box">
                <CompLabelInputHexadecimal
                    hexadecimal={hexadecimal}
                    converterTarget={(event)=>converterTarget(event)}
                />
            </div>

            <button type="button" onClick={convertResult}>Convert</button>
            
            <div className="box--binary--result">
                <CompResultHexadecimal 
                    resultHexa={resultHexa}
                />
            </div>

        </div>
    )
}
