import Banner_2 from "../../components/Banner_2/Banner_2";
import ProductCard from "../../components/ProductCard/ProductCard";
const ArrayProducts = [1, 2, 3, 4, 5, 6, 7, 8];
const Our_Shop = () => {
  return (
    <main>
      <div className="">
        <Banner_2
          image={"https://i.ibb.co.com/Zh3d2Ch/banner2.jpg"}
          title={"OUR SHOP"}
          subtitle={"Would you like to try a dish?"}
        />
      </div>
      <div className=" my-10">
        {/* category */}
        <div className=" flex items-center justify-center">
          <div className=" flex items-center gap-5 font-semibold">
            <button>SALAD</button>
            <button>PIZZA</button>
            <button>SOUPS</button>
            <button>DESSERTS</button>
            <button>DRINKS</button>
          </div>
        </div>
        {/* category */}
        <div className="">
          <div className=" grid grid-cols-3 gap-5 mt-10 max-md:grid-cols-2 max-sm:grid-cols-1 container mx-auto px-5">
            {ArrayProducts.map((item, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Our_Shop;
