type ResultBinProps = {
  result: number | undefined;
}

export default function CompResultBinaryDecimal(props: ResultBinProps) {
  return (
    <>
      <p>Decimal: {props.result ? props.result : "Not binary !!!"}</p>
    </>
  )
}
