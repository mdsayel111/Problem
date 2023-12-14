import { createBrowserRouter } from "react-router-dom";
import RootLayOut from "../LayOut/RootLayOut";
import Home from "../Pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
