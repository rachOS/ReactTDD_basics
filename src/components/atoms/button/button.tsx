import {useEffect, useMemo, useState} from "react";

import './button.css'

const Button = () => {
    const initialState = useMemo(() => {
        return {
            label: "click to render blue", className: 'btn-bg-red' , isToogled: false}
    }, []);

    const [label, setLabel] = useState(initialState.label)
    const [className, setClassName] = useState(initialState.className)
    const [toggle, setToggle] = useState(initialState.isToogled);

    useEffect(() => {
        if (toggle) {
            setLabel("click to render red")
            setClassName("btn-bg-blue")
        } else {
            setLabel(initialState.label)
            setClassName(initialState.className)
        }
    }, [initialState, toggle]);

    return (
        <button className={className} onClick={() => setToggle(prevState => !prevState)}>
            {label}
        </button>
    );
}

export default Button;
