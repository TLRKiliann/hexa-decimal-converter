type TargetProps = {
    eventVal: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const converterTarget = ({eventVal, setValue}: TargetProps): void => {
    setValue(eventVal);
}