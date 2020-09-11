import * as React from "react"
import * as ReactDom from "react-dom"
import { useState } from "react"
import { UserInput } from "./UserInput";
import { UserOutput } from "./UserOutput";

const App = (props: any) => {
    const [username, setUsername] = useState<string>("jeff");

    const onKeyPressed = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value);
    }

    return (
        <div>
            <UserInput onKeyPressed={onKeyPressed} userName={username} />
            <UserOutput userName={username} />
        </div>
        )
}

export default App;

ReactDom.render(<App />, document.getElementById("root"));