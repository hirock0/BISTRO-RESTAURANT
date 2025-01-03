import SectionHead from "../../SectionHead/SectionHead";

const Menu = [1, 2, 3, 4, 5, 6];

const FoodCard = () => {
  return (
    <div>
      <div className=" flex justify-center items-center px-5">
        <SectionHead title={"TODAY'S OFFER"} subtitle={"---Don't miss---"} />
      </div>
      <div className=" container mx-auto pb-10 px-5 mt-10">
        {/* -- */}
        <div className=" grid justify-items-center grid-cols-2 max-md:grid-cols-1 gap-4">
          {Menu.map((item, index) => (
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
                    Roasted duck breast (served pink) with gratin potato and a
                    griottine cherry sauce
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
      <div className=" bg-[url(https://i.ibb.co.com/f9PZG7S/chef-service.jpg)] bg-center bg-cover bg-no-repeat h-96 max-md:h-80">
        <div className=" container mx-auto px-5 w-full flex items-center justify-center h-full">
          <div className=" p-5 backdrop:filter backdrop-blur-lg text-white w-5/6 h-56 text-center flex flex-col items-center justify-center">
            <h1 className=" text-4xl max-md:text-3xl max-sm:text-2xl font-semibold">DESSERTS</h1>
            <p className=" mt-5">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
