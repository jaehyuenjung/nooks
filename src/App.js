import React, { useState } from "react";

const useInput = (initialValue) => {
    const { value, setValue } = useState(initialValue);
    const onChange = (event) => {
        console.log(event.target);
    };
    return { value, onChange };
};

const App = () => {
    const name = useInput("Mr.");
    return (
        <div className="App">
            <h1>Hello</h1>
            <input
                placeholder="Name"
                value={name.value}
                onChange={name.onChange}
            />
        </div>
    );
};

export default App;
