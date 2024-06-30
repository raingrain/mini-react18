import React from './React/React.js';
import ReactDOM from "./React/ReactDom.js";
import App from "./App.jsx";

// vite能用我们的react模拟真实react并解析jsx
ReactDOM.createRoot(document.querySelector("#root")).render(<App></App>);
