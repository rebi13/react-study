import { lazy } from "react";

const Main = lazy(() => import("../main"));
const BasicCalendar = lazy(() => import("../ui/Calendar/Basic"));
const UseContextEx1 = lazy(() => import("../useContext/example1"));
const UseContextEx2 = lazy(() => import("../useContext/example2"));
const UseContextReducer = lazy(() => import("../useContextReducer"));
const UseReducerEx1 = lazy(() => import("../useReducer/example1"));
const UseReducerEx2 = lazy(() => import("../useReducer/example2"));
const UseReducerEx3 = lazy(() => import("../useReducer/example3"));

const routePaths = [
  {
    path: "/",
    element: <Main />,
    key: "site-map",
    name: "SiteMap",
  },
  {
    path: "/useContext-ex1",
    element: <UseContextEx1 />,
    key: "useContext-ex1",
    name: "UseContextEx1",
  },
  {
    path: "/useContext-ex2",
    element: <UseContextEx2 />,
    key: "useContext-ex2",
    name: "UseContextEx2",
  },
  {
    path: "/useReducer-ex1",
    element: <UseReducerEx1 />,
    key: "useReducer-ex1",
    name: "UseReducerEx1",
  },
  {
    path: "/useReducer-ex2",
    element: <UseReducerEx2 />,
    key: "useReducer-ex2",
    name: "UseReducerEx2",
  },
  {
    path: "/useReducer-ex3",
    element: <UseReducerEx3 />,
    key: "useReducer-ex3",
    name: "UseReducerEx3",
  },
  {
    path: "/useContextReducer",
    element: <UseContextReducer />,
    key: "useContextReducer",
    name: "UseContextReducer",
  },
  {
    path: "/basic-calendar",
    element: <BasicCalendar />,
    key: "basic-calendar",
    name: "BasicCalendar",
  },
];

export default routePaths;
