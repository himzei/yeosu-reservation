import { createBrowserRouter } from "react-router-dom";
import Page from "./Page";
import Test from "./app/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
