//import React from 'react'

type ResultBinProps = {
    itemToggle: boolean;
    result: number | undefined;
    binary: string;
}

export default function ComponentBinResult(props: ResultBinProps) {

  return (
    <>
        {props.itemToggle === true ? (
            <p>Decimal: {props.result ? props.result : "Not a number !!!"}</p>
        ): (
            <p>Binary: {props.binary}</p>
        )}
    </>
  )
}
