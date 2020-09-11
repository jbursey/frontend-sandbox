import * as React from "react"

export interface userInputProps {
    onKeyPressed(event: React.ChangeEvent<HTMLInputElement>);
    userName: string
}

export const UserInput = (props: userInputProps) => {

    return (
        <div>
            <input type="text" onChange={props.onKeyPressed} value={props.userName} />
        </div>
        )
}