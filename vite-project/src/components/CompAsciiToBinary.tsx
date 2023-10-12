import React, { useState } from 'react'
import LabelInputComponent from './LabelInputComponent.tsx'
import ResultComponent from './ResultComponent.tsx'
import ButtonComponent from './ButtonComponent.tsx'
import { convertResult } from '../functions/asciiToBinary.tsx'
import { converterTarget } from '../functions/converterTarget.tsx'

function CompAsciiToBinary(): JSX.Element {

    const [value, setValue] = useState<string>("");
    const [result, setResult] = useState<string | undefined>("");

    const nameValue = "ASCII";

    const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        let eventVal = event.target.value;
        converterTarget({eventVal, setValue});
    }

    const handleClick = () => {
        convertResult({value, setValue, setResult});
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

export default CompAsciiToBinary