import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Sidebar from "./components/sidebar/SideBar.tsx";
import Header from "./components/header/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Provider store={store}>
      <div className="layout-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content-wrapper"> */}
    <App />
    {/* </div> */}
    {/* </div> */}
    {/* </div> */}
    {/* </Provider> */}
  </StrictMode>
);
