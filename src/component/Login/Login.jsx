import { Link } from "react-router-dom";
import Root_header from "../root-header/root-header";
import { IoLogoFacebook } from "react-icons/io";
import "./Login.scss";

/////////// designing part start ///////////
const Login = () => {
  return (
    <>
      <Root_header title="Instagram" />

      <div className="login-area">
        <div className="login-container">
          <div className="login-left">
            <div className="bg-img">
              <img src="./src/assets/images/left-phones.png" alt="" />
            </div>
            <div className="slider">
              <img src="./src/assets/images/1.png" alt="" />
            </div>
          </div>
          <div className="login-right">
            <div className="box1">
              <div className="logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                  alt=""
                />
              </div>
              <div className="login-form">
                <form action="">
                  <input
                    type="text"
                    placeholder="Phone number, username or email"
                  />
                  <input type="text" placeholder="Password" />
                  <div className="logIn">Log in</div>
                </form>
              </div>
              <div className="divider">
                <div className="left-divider"></div>
                OR
                <div className="right-divider"></div>
              </div>
              <div className="login-with-facebook log-btn">
                <span>
                  <IoLogoFacebook />
                </span>
                Log in with facebook
              </div>

              <Link to="">Forgot Password ?</Link>
            </div>
            <div className="box2">
              <p>
                Dont have an account? <Link to="/sign-in">Sign up</Link>
              </p>
            </div>
            <div className="box3">
              <p>Get the app.</p>
              <div className="app">
                <Link to="">
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                    alt=""
                  />
                </Link>
                <Link to="">
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
