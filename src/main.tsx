// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./components/App";
// // Нормалізація стилів
// import "modern-normalize";
// // Глобальні стилі (додатково)
// import "./global.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
