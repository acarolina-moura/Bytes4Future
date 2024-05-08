import { useState } from "react"

export function Toggle() {
    // let estaLigado = false
    const [state, setState] = useState(0)

    const handleClick = () => {
        // estaLigado = !estaLigado
        // setState((previousState) => !previousState)
        setState((previousState) => previousState + 1)
    }

    return (
        <div>
            {/* {state ? "ON" : "OFF"} */}
            {state}
            <button onClick={handleClick}>Clica.me</button>
        </div>
    )
}
