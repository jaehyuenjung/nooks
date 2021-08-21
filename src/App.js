import React, { useState, useEffect, useRef } from "react";

const useHover = (callback) => {
    const element = useRef(null);
    useEffect(() => {
        const { current } = element;
        if (current) {
            current.addEventListener("mouseover", callback);
        }
        return () => {
            if (current) {
                current.removeEventListener("mouseover", callback);
            }
        };
    }, []);
    return element;
};

const App = () => {
    const [state, setState] = useState({ color: "red" });
    const changeColor = () => {
        setState({ ...state, color: "blue" });
    };
    const element = useHover(changeColor);
    return (
        <div className="App">
            <h1 ref={element} style={{ ...state }}>
                Hello
            </h1>
        </div>
    );
};

export default App;
