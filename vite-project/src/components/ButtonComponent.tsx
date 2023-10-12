type ButtonProps = {
  convertResult: () => void;
}

function ButtonComponent(props: ButtonProps) {
  return (
    <>
        <button data-testid="testid-btn" type="button" onClick={props.convertResult}>
          Convert
        </button>
    </>
  )
}

export default ButtonComponent