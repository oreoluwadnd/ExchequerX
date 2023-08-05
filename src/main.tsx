import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Notifications from "./components/UI/Notifications/Notifications";
import { Provider } from "react-redux";
import UseAuth from "./hooks/useAuth";
import { store } from "./features/store";

import "./index.css";
import BaseData from "./hooks/useBaseData";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BaseData>
        <App />
      </BaseData>
      {/* <Notifications>
        <p>Login Successful</p>
      </Notifications> */}
    </Provider>
  </React.StrictMode>
);
