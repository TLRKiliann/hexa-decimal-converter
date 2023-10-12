type convertProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setResult: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const convertResult = ({value, setValue, setResult} : convertProps): void => {
    const name = value;
    const result = String.fromCharCode(parseInt(name));
    setResult(result);
    setValue("");
}