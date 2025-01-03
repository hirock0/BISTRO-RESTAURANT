import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
const NavBar = () => {
  const [menuFlag, setMenuFlag] = useState(false);
  return (
    <nav className=" h-24  max-sm:h-16  flex items-center ">
      <div className="flex items-center w-full container mx-auto px-5 justify-between">
        <div className="">
          <h1 className=" text-xl font-extrabold">BISTRO BOSS</h1>
          <h2 className=" tracking-widest font-extrabold">RESTAURANT</h2>
        </div>
        <div className=" flex items-center gap-5">
          <div
            data-aos="fade-down"
            className=" flex items-center gap-5 max-md:hidden"
          >
            <NavLink to="/" className="">
              HOME
            </NavLink>
            <NavLink to="/contact_us" className="">
              CONTACT US
            </NavLink>
            <NavLink to="/" className="">
              DASHBOARD
            </NavLink>
            <NavLink to="/our_menu" className="">
              OUR MENU
            </NavLink>
            <NavLink to="/our_shop" className="">
              OUR SHOP
            </NavLink>
          </div>
          {/* mobile_view */}
          <div
            className={`${
              !menuFlag
                ? " fixed top-24 max-sm:top-16 translate-x-full"
                : " fixed top-24 max-sm:top-16 right-0 left-0translate-x-full bg-slate-800 flex flex-col container mx-auto px-5 py-10 space-y-5 "
            } md:hidden transition-all`}
          >
            <NavLink to="/" className="">
              HOME
            </NavLink>
            <NavLink to="/contact_us" className="">
              CONTACT US
            </NavLink>
            <NavLink to="/" className="">
              DASHBOARD
            </NavLink>
            <NavLink to="/our_menu" className="">
              OUR MENU
            </NavLink>
            <NavLink to="/our_shop" className="">
              OUR SHOP
            </NavLink>
          </div>
          {/* ------- */}
          <Link to="/login" className="">
            LOGIN
          </Link>
          <button
            className=" md:hidden"
            onClick={(e) => {
              e.stopPropagation(), setMenuFlag(!menuFlag);
            }}
          >
            <IoMdMenu size={30} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
