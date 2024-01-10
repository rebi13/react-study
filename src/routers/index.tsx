import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import UseContext from "../useContext";
import UseReducerEx1 from "../useReducer/example1";
import UseReducerEx2 from "../useReducer/example2";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <App /> },
      { path: "/useContext", element: <UseContext /> },
      { path: "/useReducer-ex1", element: <UseReducerEx1 /> },
      { path: "/useReducer-ex2", element: <UseReducerEx2 /> },
    ],
  },
]);

export default Router;
