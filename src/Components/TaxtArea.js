import { useState } from "react"


export default function TaxtArea(props) {

    function LowerCase() {
        let lowerCase = text.toLocaleLowerCase()
        setText(lowerCase);
    }

    function Change(event) {
        setText(event.target.value)
    }

    function UpperCase() {
        let UpperCase = text.toUpperCase()
        setText(UpperCase);
    }

    const [text, setText] = useState("");

    return (
        <div>
            <div className="mb-3 container">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={Change} placeholder="Enter Your Text" id="exampleFormControlTextarea1" rows="10"></textarea>
                <button onClick={LowerCase} className="btn btn-dark m-2">LowerCase</button>
                <button onClick={UpperCase} className="btn btn-dark m-2">UpperCase</button>
            </div>
        </div>
    )
}
