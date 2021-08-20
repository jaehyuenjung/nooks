import React, { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
    if (typeof onBefoe !== "function") {
        return;
    }
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};

const App = () => {
    const begForLife = () => console.log("Pis don leave");
    useBeforeLeave(begForLife);
    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    );
};

export default App;
