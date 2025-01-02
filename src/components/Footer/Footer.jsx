const Footer = () => {
  return (
    <footer className=" bg-black text-white pb-10">
      <div className="  ">
        <div className=" flex max-md:flex-col  ">
          <div className=" py-20 max-md:px-5 bg-slate-700 w-full flex justify-center items-center">
            <div className=" w-4/6 max-md:w-full  text-center ">
              <h1 className=" text-3xl font-semibold">CONTACT US</h1>
              <p className=" mt-2">
                123 ABS Street, Uni 21, Bangladesh +88 123456789 Mon - Fri:
                08:00 - 22:00 Sat - Sun: 10:00 - 23:00
              </p>
            </div>
          </div>
          <div className=" w-full bg-slate-900 max-md:px-5 flex items-center justify-center">
            <div className=" text-center">
              <h1 className=" text-3xl font-semibold">Follow US</h1>
              <p className=" mt-2">Join us on social media</p>
            </div>
          </div>
          {/* ----- */}
        </div>
        <div className="max-md:px-5 flex items-center justify-center mt-5">
          <div className="">
            <h1>Copyright © CulinaryCloud. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
