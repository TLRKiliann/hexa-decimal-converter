type TargetProps = {
    //event: {target: {value: string}};
    eventVal: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const converterTarget = ({eventVal, setValue}: TargetProps): void => {
    setValue(eventVal);
}