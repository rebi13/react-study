import { lazy } from "react";

const App = lazy(() => import("../App"));
const UseContext = lazy(() => import("../useContext"));
const UseReducer = lazy(() => import("../useReducer"));

const routePaths = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/useContext",
    element: <UseContext />,
  },
  {
    path: "/useReducer",
    element: <UseReducer />,
  },
];

export default routePaths;
