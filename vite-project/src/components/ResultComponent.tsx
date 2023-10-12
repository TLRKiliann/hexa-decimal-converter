type ResultBinProps = {
  result: number | string | undefined;
}

export default function ResultComponent(props: ResultBinProps) {
  return (
    <>
      <span data-testid="span-testid">
        Result : {props.result ? props.result : "Not binary !!!"}
      </span>
    </>
  )
}
