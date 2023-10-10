import React from 'react'

type BinaryProps = {
    binary: string;
    convertToBinary: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ComponentLabInput(props: BinaryProps) {
  return (
    <>
        <label>Binary (10101) :</label>
        <input
        type="text"
        value={props.binary}
        onChange={(event)=>props.convertToBinary(event)}
        />
    </>
  )
}
