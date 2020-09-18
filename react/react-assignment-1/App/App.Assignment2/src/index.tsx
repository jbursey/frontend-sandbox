import * as React from "react"
import * as ReactDom from "react-dom"
import { useState, useEffect } from "react"
import { ValidationComponent } from "./ValidationComponent"
import { CharComponent } from "./CharComponent"

const App = (props: any) => {
    //--app vars
    let charJSX = null;


    //--use state
    const [inputString, setInputString] = useState<string>("init");

    const onInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputString(event.target.value);
    }

    charJSX = inputString.split("").map((char: string) => {
        return (<CharComponent char={char} />);
    });

    ////--use effect
    //useEffect(() => {

    //}, [inputString]);    

    return (
        <div>
            <input type="text" onChange={onInputChanged} value={inputString} />
            <ValidationComponent inputStringLen={inputString.length} />
            {charJSX}
        </div>
        )
}

ReactDom.render(<App />, document.getElementById("root"));
ReactDom.render(<App />, document.getElementById("root2"));