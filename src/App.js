import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
    const { title, setTitle } = useState(initialTitle);
    updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};

const App = () => {
    const titleUpdater = usetTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
        <div className="App">
            <div>Hi</div>
        </div>
    );
};

export default App;
