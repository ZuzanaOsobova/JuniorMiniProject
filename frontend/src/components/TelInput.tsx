type TelInputProps = {
    idName: string;
    name: string;
    required?: boolean;
}

export default function TelInput(props: TelInputProps) {
    const {idName, name, required = false} = props;


    return (
        <>
            <label htmlFor={idName}>{name}</label>
            <input type="tel" name={idName} id={idName} placeholder={"+420 123 456 789"} required={required}  />
        </>
    )
}