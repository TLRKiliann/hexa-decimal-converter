type ResultBinProps = {
  resultHexa: number | undefined;
  }

export default function CompResultHexadecimal(props: ResultBinProps) {
  return (
    <>
      <p>Decimal: {props.resultHexa ? props.resultHexa : "Not hexadecimal !!!"}</p>
    </>
  )
}
