import NavBar from "../NavBar/NavBar";
const Banner_2 = ({ image, title, subtitle }) => {
  return (
    <div>
      {/* nav */}
      <div className=" fixed z-50 text-white backdrop:filter backdrop-blur-sm bg-slate-800/50 right-0 left-0 top-0">
        <NavBar />
      </div>
      {/* nav */}
      <div
        className={`max-lg:h-[700px] max-md:h-[600px] relative max-sm:h-[450px]  flex justify-center items-center`}
      >
        <img
          src={image.toString()}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className=" absolute bg-slate-800/50 text-white w-5/6 h-3/6 p-5 flex flex-col items-center justify-center">
          <h1
            data-aos="fade-up"
            className=" text-5xl max-md:text-3xl max-sm:text-2xl font-bold text-center"
          >
            {title}
          </h1>
          <p data-aos="fade-up" className=" mt-3 max-sm:mt-0">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner_2;
