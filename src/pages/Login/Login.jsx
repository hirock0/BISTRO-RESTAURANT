import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import swal from "sweetalert";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Login = () => {
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const email = formData.get("email");
      const pasword = formData.get("password");
      const captchaValue = formData.get("captchaValue");
      if (!validateCaptcha(captchaValue)) {
        swal({
          title: "Captcha is not match",
          icon: "warning",
        });
      } else {
        swal({
          title: "Login successfully",
          icon: "success",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <main>
      <div className="h-screen bg-[url(https://i.ibb.co.com/RQ0VKbL/authentication.png)] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto  px-5">
          <div className=" flex relative px-5 shadow-2xl border-slate-300 border-2 py-10 ">
            <button
              onClick={() => navigate("/")}
              className=" absolute top-5 hover:text-yellow-500"
            >
              <FaRegArrowAltCircleLeft size={20} />
            </button>
            <div className=" w-1/2 max-md:hidden flex items-center justify-center">
              <img
                src="https://i.ibb.co.com/ZLqZsWn/authentication2.png"
                alt="logo"
                className=" w-5/6"
              />
            </div>
            <div className=" w-1/2 max-md:w-full ">
              <h1 className=" text-center text-3xl font-semibold">Login</h1>
              <form onSubmit={onLogin}>
                <div className=" space-y-4">
                  <div className="">
                    <h1>Email</h1>
                    <input
                      type="text"
                      name="email"
                      required
                      className=" h-12 pl-2 rounded-md w-full"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="">
                    <h1>Password</h1>
                    <input
                      type="text"
                      name="password"
                      required
                      className=" h-12 pl-2 rounded-md w-full"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className=" space-y-5">
                    <div className="">
                      <LoadCanvasTemplate />
                    </div>

                    <input
                      placeholder="Enter Captcha Value"
                      name="captchaValue"
                      type="text"
                      required
                      className=" w-full h-12 pl-2 rounded-md"
                    />

                    <button
                      className=" bg-yellow-600 text-white w-full py-3 rounded-md px-5"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              {/* ---------------- */}
              <div className=" mt-4 text-center">
                <Link to={"/register"} className=" text-yellow-600">
                  New here? Create a New Account
                </Link>
              </div>
              <div className=" text-center mt-5">
                <h1>Or sign in with</h1>
                <div className=" flex justify-center mt-3">
                  <div className=" flex items-center gap-5">
                    <Link to={""}>
                      <CiFacebook />
                    </Link>
                    <Link to={""}>
                      <FaGoogle />
                    </Link>
                    <Link to={""}>
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              </div>
              {/* ---------------- */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
