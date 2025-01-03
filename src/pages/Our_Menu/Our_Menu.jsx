import NavBar from "../../components/NavBar/NavBar";
import FoodCard from "../../components/our_menu/FoodCard/FoodCard";
const FoodOffers = [1, 2, 3, 4];

const Our_Menu = () => {
  return (
    <main>
      <div className=" ">
        {/* nav */}
        <div className=" fixed z-50 text-white backdrop:filter backdrop-blur-sm bg-slate-800/50 right-0 left-0 top-0">
          <NavBar />
        </div>
        {/* nav */}
        <div className=" bg-[url(/assets/menu/banner3.jpg)] h-[800px] max-lg:h-[700px] max-md:h-[600px] max-sm:h-[450px] bg-cover bg-center bg-no-repeat flex justify-center items-center">
          <div className="  bg-slate-800/50 text-white w-5/6 h-3/6 p-5 flex flex-col items-center justify-center">
            <h1
              data-aos="fade-up"
              className=" text-5xl max-md:text-3xl max-sm:text-2xl font-bold text-center"
            >
              OUR MENU
            </h1>
            <p data-aos="fade-up" className=" mt-3 max-sm:mt-0">
              Would you like to try a dish?
            </p>
          </div>
        </div>
        {FoodOffers.map((item) => (
          <section key={item} data-aos="fade-up" className=" mt-10">
            <FoodCard />
          </section>
        ))}
        <section>
          <div
            data-aos="fade-up"
            className=" container mx-auto pb-10 px-5 mt-10"
          >
            {/* -- */}
            <div className=" grid justify-items-center grid-cols-2 max-md:grid-cols-1 gap-4">
              {FoodOffers.map((item, index) => (
                <div key={index} className=" flex">
                  <div className=" flex items-center gap-4">
                    <img
                      src="/assets/logo2.png"
                      alt="logo"
                      className=" h-20 w-20 max-md:h-16 max-md:w-16 object-contain"
                    />
                    <div className="">
                      <h1>ROAST DUCK BREAST ------------------</h1>
                      <p>
                        Roasted duck breast (served pink) with gratin potato and
                        a griottine cherry sauce
                      </p>
                    </div>
                  </div>
                  <h1 className=" text-yellow-500">$14.5</h1>
                </div>
              ))}
            </div>
            <div className=" flex items-center justify-center mt-8">
              <button className=" border-b-4 shadow-md font-semibold hover:scale-110 active:scale-100 px-8 max-md:px-5 max-sm:px-3 py-4 rounded-lg">
                VIEW FULL MENU
              </button>
            </div>
            {/* --- */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Our_Menu;
