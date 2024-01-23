import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);