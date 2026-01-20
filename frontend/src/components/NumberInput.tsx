type NumberInputProps = {
    idName: string;
    name: string;
    value?: number;
    required?: boolean;
}

export default function NumberInput(props: NumberInputProps) {
    const {idName, name, value, required = false} = props;


    return (
        <>
            <label htmlFor={idName}>{name}</label>
            <input type="number" name={idName} id={idName} value={value} required={required}  />
        </>
    )
}