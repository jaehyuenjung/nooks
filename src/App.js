import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
    const ref = useRef();
    useEffect(() => {
        const element = ref.current;
        if (element) {
            element.addEventListener("click", onClick);
        }
        return () => {
            if (element) {
                element.removeEventListener("click", onClick);
            }
        };
    }, [onClick]);
    return ref;
};

const App = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
    return (
        <div className="App">
            <div ref={title}>Hi</div>
        </div>
    );
};

export default App;
