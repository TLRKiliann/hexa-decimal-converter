type CustomProps = {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string | undefined>>;
    setResult: React.Dispatch<React.SetStateAction<string>>;
}

const converter = ({text, setText, setResult}: CustomProps) => {
    const textSplit = text.split('');
    const convertToBin = textSplit.map((char) => char.charCodeAt(0).toString(2));
    const convertToBinJoin = convertToBin.join(' ');
    setResult(convertToBinJoin);
    setText("");
}

export default converter;
