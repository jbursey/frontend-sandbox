import * as ReactDom from "react-dom"
import * as React from "react"

export interface AppProps
{
    name: string
}

export const App : React.FunctionComponent<AppProps> = (props) => (
<div>Hi {props.name}</div>
)

ReactDom.render(<App name="Yugi"/>, document.getElementById("root"));