type TextInputProps = {
    idName: string;
    name: string;
    placeholder: string;
    required?: boolean;
}

export default function TextInput(props: TextInputProps) {
    const {idName, name, placeholder, required = false} = props;


    return (
        <>
            <label htmlFor={idName}>{name}</label>
            <input type="text" name={idName} id={idName} placeholder={placeholder} required={required}  />
        </>
    )
}