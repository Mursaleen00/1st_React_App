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

    function Trim() {
        let trim = text.trim();
        setText(trim)
    }

    function Clear() {
        setText("");
    }

    // function Space() {
    //     let rep = text.replace(/ /g, " ")
    //     setText(rep)
    // }




    const [text, setText] = useState("");

    return (
        <div>
            <div className="mb-3 container">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={Change} placeholder="Enter Your Text" id="exampleFormControlTextarea1" rows="10"></textarea>
                <button onClick={LowerCase} className="btn btn-dark m-2">Lower Case</button>
                <button onClick={UpperCase} className="btn btn-dark m-2">Upper Case</button>
                <button onClick={Trim} className="btn btn-dark m-2">Trim</button>
                {/* <button onClick={Space} className="btn btn-dark m-2">Space</button> */}
                <button onClick={Clear} className="btn btn-dark m-2">Clear</button>
            </div>
        </div>
    )
}
