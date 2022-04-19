import { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';

export function MyForm() {
    const [name, setName] = useState("");
    useEffect(() => {
       console.log("Effect");
      },[]);
    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    )
}