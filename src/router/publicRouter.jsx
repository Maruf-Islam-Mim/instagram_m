import Login from "../component/Login/Login";
import SignIn from "../component/Signin/Signin";

const publicRouter = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
];

export default publicRouter;
