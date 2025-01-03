import SectionHead from "../../SectionHead/SectionHead";

const Section_4 = () => {
  return (
    <div
      data-aos="fade-up"
      className=" my-10 md:h-[600px] bg-[url(https://i.ibb.co.com/RS8LnYY/featured.jpg)] bg-center bg-cover bg-no-repeat"
    >
      <div className=" bg-zinc-800/60 py-10 h-full">
        <div className=" container mx-auto px-5 text-white">
          <div className=" flex items-center justify-center">
            <SectionHead
              subtitle={"---Check it out---"}
              title={"FROM OUR MENU"}
              section={4}
            />
          </div>
          <div className=" flex gap-5 max-md:flex-col md:h-[300px]">
            <div className=" w-full">
              <img
                src="https://i.ibb.co.com/RS8LnYY/featured.jpg"
                alt="food"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className=" w-full flex flex-col items-center justify-center">
              <p>
                March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error voluptate facere, deserunt
                dolores maiores quod nobis quas quasi. Eaque repellat recusandae
                ad laudantium tempore consequatur consequuntur omnis ullam
                maxime tenetur.
              </p>
              <button className=" mt-5 px-5 py-3 rounded-lg border-b-4 border-white hover:scale-105 active:scale-100">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_4;
