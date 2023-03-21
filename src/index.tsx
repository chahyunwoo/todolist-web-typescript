import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <Reset />
      <App />
    </Provider>
  </>
);
