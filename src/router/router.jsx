import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRouter";
import privetRouter from "./privetRouter";

const router = createBrowserRouter([...publicRouter, ...privetRouter]);

export default router;
