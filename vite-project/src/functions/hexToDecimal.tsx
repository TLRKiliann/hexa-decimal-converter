type convertProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setResult: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const convertResult = ({value, setValue, setResult} : convertProps): void => {
    const parser = parseInt(value,16);
    setResult(parser);
    setValue("");
}