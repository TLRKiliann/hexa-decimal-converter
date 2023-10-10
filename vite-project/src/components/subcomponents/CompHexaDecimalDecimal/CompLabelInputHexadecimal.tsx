import React from 'react'

type BinaryProps = {
    hexadecimal: string;
    converterTarget: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CompLabelInputHexadecimal(props: BinaryProps) {
    return (
        <>
            <label>Hexadecimal (c) :</label>
            <input
            type="text"
            value={props.hexadecimal}
            onChange={(event)=>props.converterTarget(event)}
            />
        </>
    )
}
