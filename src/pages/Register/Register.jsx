import { Link, useNavigate } from "react-router-dom";

import swal from "sweetalert";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
const Register = () => {
  const navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const email = formData.get("email");
      const name = formData.get("name");
      const pasword = formData.get("password");

      console.log(email, pasword, name);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <main>
      <div className="h-screen bg-[url(https://i.ibb.co.com/RQ0VKbL/authentication.png)] flex items-center bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto  px-5">
          <div className=" flex px-5 relative shadow-2xl border-slate-300 border-2 py-10 ">
            <button
              onClick={() => navigate(-1)}
              className=" absolute top-5 hover:text-yellow-500"
            >
              <FaRegArrowAltCircleLeft size={20} />
            </button>
            <div className=" w-1/2 max-md:w-full ">
              <h1 className=" text-center text-3xl font-semibold">Register</h1>
              <form onSubmit={onRegister}>
                <div className=" space-y-4">
                  <div className="">
                    <h1>Name</h1>
                    <input
                      type="text"
                      name="name"
                      required
                      className=" h-12 pl-2 rounded-md w-full"
                      placeholder="Enter your name"
                    />
                  </div>
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

                  <button
                    className=" bg-yellow-600 text-white w-full py-3 rounded-md px-5"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* ---------------- */}
              <div className=" mt-4 text-center">
                <Link to={"/login"} className=" text-yellow-600">
                  Already registered? Go to log in
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
            <div className=" w-1/2 max-md:hidden flex items-center justify-center">
              <img
                src="https://i.ibb.co.com/ZLqZsWn/authentication2.png"
                alt="logo"
                className=" w-5/6"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
