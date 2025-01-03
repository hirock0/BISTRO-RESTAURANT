import Banner_2 from "../../components/Banner_2/Banner_2";
import SectionHead from "../../components/SectionHead/SectionHead";
import { IoCall } from "react-icons/io5";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Contact_Us = () => {
  const [captchaValue, setCaptchaValue] = useState(true);
  const onChange = () => {
    setCaptchaValue(false);
  };
  const onMessage = (e) => {
    e.preventDefault();
    console.log("data");
  };

  return (
    <main>
      <div className=" pb-10">
        <div className="">
          <Banner_2
            image={"https://i.ibb.co.com/SnnYN4R/banner.jpg"}
            title={"CONTACT US"}
            subtitle={"Would you like to try a dish?"}
          />
        </div>
        <div className=" mt-10 ">
          <div className=" flex items-center justify-center px-5">
            <SectionHead title={"OUR LOCATION"} subtitle={"---Visit Us---"} />
          </div>
          <div className=" container mx-auto px-5 gap-5 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="  border">
                <div className=" bg-yellow-600 w-full h-16 flex items-center justify-center text-white">
                  <IoCall size={25} className=" " />
                </div>
                <div className=" px-4 pb-4  ">
                  <div className="bg-zinc-200 pb-20 p-5 text-center ">
                    <h1 className=" font-semibold text-xl">PHONE</h1>
                    <p>+8801700554293</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ---- */}
        <div className=" mt-20">
          <div className=" flex items-center justify-center px-5">
            <SectionHead
              title={"CONTACT FORM"}
              subtitle={"---Send Us a Message---"}
            />
          </div>
          {/* contact_form_start */}
          <div className="">
            <div className=" container mx-auto px-5 bg-zinc-200 p-10 ">
              <form onSubmit={onMessage} className=" ">
                <div className="grid grid-cols-2 gap-5">
                  <div className="">
                    <h1>Name</h1>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className=" h-12 pl-2 rounded-md w-full"
                    />
                  </div>
                  <div className="">
                    <h1>Email</h1>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your email"
                      className=" h-12 pl-2 rounded-md w-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <h1>Phone</h1>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      className=" h-12 pl-2 rounded-md w-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <h1>Message</h1>
                    <textarea
                      name="message"
                      placeholder="Enter your message"
                      className=" h-52 pl-2 rounded-md w-full "
                    />
                  </div>
                  <div className="">
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className=" mt-10 flex justify-center items-center">
                  <button
                    disabled={captchaValue}
                    type="submit"
                    className={`${
                      captchaValue
                        ? " bg-slate-400 opacity-40"
                        : " text-white bg-slate-500"
                    } px-5 py-3 rounded-md`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* contact_form_start */}
        </div>
      </div>
    </main>
  );
};

export default Contact_Us;
