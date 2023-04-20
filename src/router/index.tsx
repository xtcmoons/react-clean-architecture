import { createHashRouter } from "react-router-dom";
import Home from "../page/home";


const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  }
])

export default router
