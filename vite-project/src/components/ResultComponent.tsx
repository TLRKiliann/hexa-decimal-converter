type ResultBinProps = {
  result: number | string | undefined;
}

export default function ResultComponent(props: ResultBinProps) {
  return (
    <>
      <p>Decimal: {props.result ? props.result : "Not binary !!!"}</p>
    </>
  )
}
