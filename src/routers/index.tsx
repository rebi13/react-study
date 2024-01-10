import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import UseContext from "../useContext";
import UseReducer from "../useReducer";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <App /> },
      { path: "/useContext", element: <UseContext /> },
      { path: "/useReducer", element: <UseReducer /> },
    ],
  },
]);

export default Router;
