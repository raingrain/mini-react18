import React from "./React/React.js";

function Foo() {
    const [count, setCount] = React.useState(10);
    const [bar, setBar] = React.useState("bar");

    function handleClick() {
        setCount((c) => c + 1);
        setBar((b) => b + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>add</button>
            <div>count: {count}</div>
            <div>bar: {bar}</div>
        </div>
    );
}

function Bar() {
    const [count, setCount] = React.useState(10);

    function handleClick() {
        setCount((c) => c + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>add</button>
            <div>count: {count}</div>
        </div>
    );
}

function App() {
    const [count, setCount] = React.useState(10);
    const [attribute, setAttribute] = React.useState({id: "app"});

    function handleClick() {
        setCount((c) => c + 1);
        setAttribute((a) => {
            return {
                ...a,
                id: a.id + 1
            };
        });
    }

    return (
        <div {...attribute}>
            <h1>Mini React18</h1>
            <button onClick={handleClick}>add</button>
            <div>count: {count}</div>
            <Foo></Foo>
            <Bar></Bar>
        </div>
    );
}

export default App;
