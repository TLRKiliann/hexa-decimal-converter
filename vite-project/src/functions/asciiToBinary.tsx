type ConverterProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setResult: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const convertResult = ({value, setValue, setResult}: ConverterProps): void => {
    const textSplit = value.split('');
    const convertToBin = textSplit.map((char) => char.charCodeAt(0).toString(2));
    const convertToBinJoin = convertToBin.join(' ');
    setResult(convertToBinJoin);
    setValue("");
}