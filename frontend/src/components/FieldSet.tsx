import * as React from "react";

type FieldSetProps = {
    children: React.ReactNode;
    id: string;
    legend: string;
    className?: string;

}

export default function FieldSet(props: FieldSetProps) {


    return (
        <>
            <fieldset id={props.id} className={props.className}>
                <legend>{props.legend}</legend>
                {props.children}
            </fieldset>
        </>
    )
}