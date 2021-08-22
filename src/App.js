import React, { useState, useEffect, useRef } from "react";

const useGraph = (type = "2d") => {
    const ref = useRef();
    const [ctx, setCtx] = useState(null);
    const [initTask, setInitTask] = useState([]);
    const [task, setTask] = useState([]);
    const painting = (t) => {
        t.forEach((el) => {
            Object.keys(el).forEach((key) => {
                if (typeof el[key] === "object") {
                    ctx[key](...el[key]);
                } else {
                    ctx[key] = el[key];
                }
            });
        });
    };
    useEffect(() => {
        const { current } = ref;
        if (current) {
            setCtx(current.getContext(type));
        }
    }, [type]);
    useEffect(() => {
        if ((task && task.length) || (initTask && initTask.length)) {
            const { current } = ref;
            ctx.clearRect(0, 0, current.width, current.height);
            painting(initTask);
            painting(task);
        }
    }, [ctx, initTask, task]);
    return { ref, initTask, setInitTask, setTask };
};

const App = () => {
    const { ref, initTask, setInitTask, setTask } = useGraph();
    useEffect(() => {
        setInitTask([
            ...initTask,
            {
                fillStyle: "rgb(200,0,0)",
                fillRect: [10, 10, 50, 50],
            },
            {
                fillStyle: "blue",
                fillRect: [30, 30, 50, 50],
            },
        ]);
        setTimeout(
            () => setTask([{ fillStyle: "black", fillRect: [50, 50, 50, 50] }]),
            5000
        );
        setTimeout(
            () => setTask([{ fillStyle: "red", fillRect: [70, 70, 50, 50] }]),
            8000
        );
    }, []);
    return (
        <div className="App" style={{ height: "100vh" }}>
            <canvas ref={ref}></canvas>
        </div>
    );
};

export default App;
