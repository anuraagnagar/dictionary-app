import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/styles/index.css";
import App from "./App.jsx";

// Access element from index.html document.
const element = document.getElementById("root");

// Create a React root using ReactDOM library with the root element.
const root = ReactDOM.createRoot(element);

// Render the React <App /> component into the root with StrictMode enabled.
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
