import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Material Icons 폰트를 동적으로 로드
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
