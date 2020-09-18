import * as React from "react"
import "./CharComponent.css"

export interface CharComponentProps {
    char: string
}

export const CharComponent = (props: CharComponentProps) => {
    let charJSX = null;

    return (
        <div className="CharComponent">
            {props.char}
        </div>
        )
}