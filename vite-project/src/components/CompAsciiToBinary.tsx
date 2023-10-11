import React, { useState } from 'react'
import LabelInputComponent from './LabelInputComponent.js'
import ResultComponent from './ResultComponent.js'
import ButtonComponent from './ButtonComponent.js'

//import converter from '../hooks/convertFunction.hook.ts';

function CompAsciiToBinary() {

    const [value, setValue] = useState<string>("ASCII");
    const [result, setResult] = useState<string | undefined>("");

    const converterTarget = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const etv = event?.target.value;
      setValue(etv);
    }

    const convertResult = (): void => {
        const textSplit = value.split('');
        const convertToBin = textSplit.map((char) => char.charCodeAt(0).toString(2));
        const convertToBinJoin = convertToBin.join(' ');
        console.log(convertToBinJoin);
        setResult(convertToBinJoin);
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

export default CompAsciiToBinary