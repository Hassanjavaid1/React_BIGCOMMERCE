import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyContextProvider from "./Components/JavaScript/MyContextProvider";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-yp1aessv3oomjxut.us.auth0.com"
    clientId="shDewFSFmajAZ8kiqbj1sH7hceEbf3fQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <MyContextProvider>
  <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContextProvider>
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
