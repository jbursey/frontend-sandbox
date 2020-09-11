import * as React from "react"
import { useState } from "react"

export interface userOutputProps {
    userName: string
}

export const UserOutput = (props: userOutputProps) => {
    return (
        <div>
            <p>{props.userName}</p>
            </div>
        )
}