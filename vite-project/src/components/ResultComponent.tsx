type ResultBinProps = {
  result: number | string | undefined;
}

export default function ResultComponent(props: ResultBinProps) {
  return (
    <>
      <p>Result : {props.result ? props.result : "Not binary !!!"}</p>
    </>
  )
}
