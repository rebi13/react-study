import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import UseContext from "../useContext";
import UseReducerEx1 from "../useReducer/example1";
import UseReducerEx2 from "../useReducer/example2";
import UseReducerEx3 from "../useReducer/example3";
import UseContextReducer from "../useContextReducer";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <App /> },
      { path: "/useContext", element: <UseContext /> },
      { path: "/useReducer-ex1", element: <UseReducerEx1 /> },
      { path: "/useReducer-ex2", element: <UseReducerEx2 /> },
      { path: "/useReducer-ex3", element: <UseReducerEx3 /> },
      { path: "/useContextReducer", element: <UseContextReducer /> },
    ],
  },
]);

export default Router;
