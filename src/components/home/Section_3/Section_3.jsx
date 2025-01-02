import ProductCard from "../../ProductCard/ProductCard";
import SectionHead from "../../SectionHead/SectionHead";
const Products = [
  1,2,3,4,5,6,7
]
const Section_3 = () => {
  return (
    <div className=" mt-20">
      <div className=" flex items-center justify-center container mx-auto px-5">
        <SectionHead subtitle={"---Should Try---"} title={"CHEF RECOMMENDS"}/>
      </div>
      {/*cards */}
      <div className=" grid gap-5 justify-items-center grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 container mx-auto px-5">
        {
          Products.map((item, index) => (
            <ProductCard key={index} />
          ))
        }
      </div>
    </div>
  );
};

export default Section_3;
