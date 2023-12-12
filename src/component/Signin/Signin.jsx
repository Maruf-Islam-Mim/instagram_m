import { Link } from "react-router-dom";
import Root_header from "../root-header/root-header";
import { IoLogoFacebook } from "react-icons/io";
import "./Signin.scss";

/////////// designIng part start ///////////
const SignIn = () => {
  return (
    <>
      <Root_header title="Instagram" />

      <div className="SignIn-area">
        <div className="SignIn-container">
          <div className="SignIn-right">
            <div className="header-content">
              <div className="logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                  alt=""
                />
              </div>
              <p>
                Sign up to see photos and videos <br /> from your friends.
              </p>
              <div className="create-account">
                <span>
                  <IoLogoFacebook />
                </span>
                Log in with facebook
              </div>
            </div>
            <div className="divider">
              <div className="left-divider"></div>
              OR
              <div className="right-divider"></div>
            </div>
            <div className="SignIn-form">
              <form action="">
                <input type="text" placeholder="Mobile Number or Email" />
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="User Name" />
                <input type="text" placeholder="Password" />
              </form>
            </div>
            <div className="trams-policy">
              <div className="p1">
                <p>
                  People who use our service may have uploaded your contact
                  information to Instagram. <Link to="">Learn More</Link>
                </p>
              </div>
              <div className="p1">
                <p>
                  By signIng up, you agree to our <Link to="">Terms</Link> ,
                  <Link to="">Privacy Policy</Link> and{" "}
                  <Link to="">Cookies Policy</Link>
                </p>
              </div>
            </div>
            <div className="signUp">
              <div className="create-account">Sign up</div>
            </div>
          </div>
          <div className="box2">
            <p>
              Have an account? <Link to="">Log in</Link>
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
    </>
  );
};

export default SignIn;
