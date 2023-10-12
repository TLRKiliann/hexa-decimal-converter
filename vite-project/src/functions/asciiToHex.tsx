type ConverterProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
    setResult: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const convertResult = ({value, setValue, setResult}: ConverterProps): void => {
    let asciiCode = value.charCodeAt(0);
    let hexValue = asciiCode.toString(16);
    setResult("0x" + hexValue);
    setValue("");
}