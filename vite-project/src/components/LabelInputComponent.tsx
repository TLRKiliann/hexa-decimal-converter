import React from 'react'

type InputLblProps = {
    value: string;
    converterTarget: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children: string | JSX.Element | JSX.Element[];
}

export default function LabelInputComponent({value , converterTarget, children}: InputLblProps) {
    return (
        <>
            <label>{children} (c) :</label>
            <input
            type="text"
            value={value}
            onChange={(event)=>converterTarget(event)}
            />
        </>
    )
}
