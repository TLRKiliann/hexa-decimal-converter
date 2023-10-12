type ConvertProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setResult: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const convertResult = ({value, setValue, setResult}: ConvertProps) => {
    const parser = parseInt(value,2);
    setResult(parser);
    setValue("");
}