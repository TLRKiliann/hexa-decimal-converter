type ButtonProps = {
  convertResult: () => void;
}

function ButtonComponent(props: ButtonProps) {
  return (
    <>
        <button type="button" onClick={props.convertResult}>Convert</button>
    </>
  )
}

export default ButtonComponent