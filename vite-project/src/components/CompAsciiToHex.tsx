import React, { useState } from 'react'
import LabelInputComponent from './LabelInputComponent.js'
import ResultComponent from './ResultComponent.js'
import ButtonComponent from './ButtonComponent.js'

function CompAsciiToHex() {

    const [value, setValue] = useState<string>("");
    const [result, setResult] = useState<string | undefined>("");

    const nameValue = "ASCII";

    const converterTarget = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const etv = event?.target.value;
      setValue(etv);
    }

    const convertResult = (): void => {
        let asciiCode = value.charCodeAt(0);
        let hexValue = asciiCode.toString(16);
        setResult("0x" + hexValue);
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

export default CompAsciiToHex