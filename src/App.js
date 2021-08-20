import React, { useState, useEffect, useRef } from "react";

const useConfirm = (message = "", onConfirm, rejection) => {
    if (!onConfirm && typeof onConfirm !== "function") {
        return;
    }
    if (rejection && typeof rejection !== "function") {
        return;
    }
    const confirmAction = () => {
        if (confirm(message)) {
            onConfirm();
        } else {
            rejection();
        }
    };
    return confirmAction;
};

const App = () => {
    const deleteWorld = () => console.log("Deleting the world");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
    return (
        <div className="App">
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
};

export default App;
