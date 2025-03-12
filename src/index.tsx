import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import "./main.scss";
import { ResizeObserverFix } from "./components/ResizeObserver/ResizeObserver";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { ModalProvider } from "./context/Modal/ModalContext";
import { BackdropProvider } from "./context/Backdrop/BackdropContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { SocketContextProvider } from "./context/Socket/SocketContext";
import "./services/error.services";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <SnackbarProvider maxSnack={3}>
    <SocketContextProvider>
      <BackdropProvider>
        <ModalProvider>
          <Provider store={store}>
            <Router>
              <ResizeObserverFix />
              <ScrollToTop />
              <App />
            </Router>
          </Provider>
        </ModalProvider>
      </BackdropProvider>
    </SocketContextProvider>
  </SnackbarProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
