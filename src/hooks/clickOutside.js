import { useEffect, useRef } from "react"

export const ClickOutSideHandler = (clickHandler) => {
    const ref = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(!ref.current.contains(e.target))
                clickHandler()
        }
        document.addEventListener("mousedown", handler)

        return() => {
            document.removeEventListener("mousedown", handler)
        }
    })
    return ref
}