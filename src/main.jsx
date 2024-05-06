import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const apiUrl = "https://rick-and-morty-server-production.up.railway.app";
// apiUrl = "http://localhost:3001";
export default apiUrl;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
