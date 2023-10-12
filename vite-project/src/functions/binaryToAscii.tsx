type ConvertProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setResult: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const convertResult = ({value, setValue, setResult}: ConvertProps) => {
    const parser = value.split(" ");
    const convertToAscii = parser.map((elem) => String.fromCharCode(parseInt(elem, 2)));
    const resltOfConversion = convertToAscii.join("");
    setResult(resltOfConversion);
    setValue("");
}
