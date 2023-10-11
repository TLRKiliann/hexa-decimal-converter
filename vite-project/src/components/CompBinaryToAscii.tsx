import React, { useState } from 'react'
import LabelInputComponent from './LabelInputComponent.tsx'
import ResultComponent from './ResultComponent.tsx'
import ButtonComponent from './ButtonComponent.tsx';

function CompBinaryToAscii() {
    
    const [value, setValue] = useState<string>("");
    const [result, setResult] = useState<string | undefined>();

    const nameValue = "Binary";

    const converterTarget = (event: React.ChangeEvent<HTMLInputElement>) => {
        const etv = event?.target.value;
        setValue(etv);
    }
    
    const convertResult = () => {
        const parser = value.split(" ");
        const convertToAscii = parser.map((elem) => String.fromCharCode(parseInt(elem, 2)));
        const resltOfConversion = convertToAscii.join("");
        setResult(resltOfConversion);
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

export default CompBinaryToAscii