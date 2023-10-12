import React, { useState } from 'react'
import LabelInputComponent from './LabelInputComponent.tsx'
import ResultComponent from './ResultComponent.tsx'
import ButtonComponent from './ButtonComponent.tsx'
import { convertResult } from '../functions/binaryToAscii.tsx'
import { converterTarget } from '../functions/converterTarget.tsx'

function CompBinaryToAscii(): JSX.Element {
    
    const [value, setValue] = useState<string>("");
    const [result, setResult] = useState<string | undefined>("");

    const nameValue = "Binary";

    const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        let eventVal = event.target.value;
        converterTarget({eventVal, setValue});
    }
    
    const handleClick = () => {
        convertResult({value, setResult, setValue});
    }

    return (
        <>

            <div className="labelinput--box">
                <LabelInputComponent
                    value={value}
                    nameValue={nameValue}
                    converterTarget={(event)=>handleEvent(event)}
                >{nameValue}</LabelInputComponent>
            </div>

            <ButtonComponent convertResult={handleClick} />
            
            <div className="box--result">
                <ResultComponent 
                    result={result}
                />
            </div>

        </>
    )
}

export default CompBinaryToAscii