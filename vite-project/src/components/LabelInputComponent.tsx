import React from 'react'

type InputLblProps = {
    value: string | undefined;
    nameValue: string;
    converterTarget: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children: string | JSX.Element | JSX.Element[];
}

export default function LabelInputComponent({value, nameValue, converterTarget, children}: InputLblProps) {
    return (
        <>
            <label>{children} :</label>
            <input
                data-testid="testid-input"
                type="text"
                value={value}
                onChange={(event)=>converterTarget(event)}
                placeholder={nameValue}
            />
        </>
    )
}
