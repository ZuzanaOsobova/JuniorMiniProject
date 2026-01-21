type InputComponentProps = {

    id: string,
    label: string,
    type: string,
    name: string,
    placeholder?: string
    value?: string,
    required?: boolean


}

export default function InputComponent({id, label, type, name, placeholder, value, required = false}: InputComponentProps) {


    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} value={value} placeholder={placeholder} required={required} />
        </>
    )
}