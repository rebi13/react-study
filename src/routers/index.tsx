import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import UseContextEx1 from "../useContext/example1";
import UseContextEx2 from "../useContext/example2";
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
      { path: "/useContext-ex1", element: <UseContextEx1 /> },
      { path: "/useContext-ex2", element: <UseContextEx2 /> },
      { path: "/useReducer-ex1", element: <UseReducerEx1 /> },
      { path: "/useReducer-ex2", element: <UseReducerEx2 /> },
      { path: "/useReducer-ex3", element: <UseReducerEx3 /> },
      { path: "/useContextReducer", element: <UseContextReducer /> },
    ],
  },
]);

export default Router;
