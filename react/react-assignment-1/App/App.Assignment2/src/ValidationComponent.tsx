import * as React from "react";

export interface ValidationComponentProps {
    inputStringLen : number
}

export const ValidationComponent = (props: ValidationComponentProps) => {
    let validationMsg = null;

    const validate = () => {
        if (props.inputStringLen <= 5) {
            validationMsg = (<span>Text too short</span>);
        }
        else {
            validationMsg = (<span>Yay you</span>);
        }
    }

    validate();

    return (

        <div>
            {validationMsg}
        </div>
    )
}