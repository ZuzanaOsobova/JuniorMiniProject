type TextAreaProps = {
    idName: string;
    name: string;
    placeholder: string;
    rows?: number;
    required?: boolean;
}

export default function TextArea(props: TextAreaProps) {
    const {idName, name, placeholder, rows = 4, required = false} = props;


    return (
        <>
            <label htmlFor={idName}>{name}</label>
            <textarea name={idName} id={idName} placeholder={placeholder} rows={rows} required={required}  />
        </>
    )
}