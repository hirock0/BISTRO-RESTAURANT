const ProductCard = () => {
  return (
    <div className=" bg-slate-100 rounded-md overflow-hidden shadow-lg pb-5">
      <div className=" border h-96">
        <img
          src="https://i.ibb.co.com/09ZvW8N/slide1.jpg"
          alt="user_recommend"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" h-52 overflow-hidden text-center mt-5 flex flex-col items-center justify-between p-5">
        <div className="">
          <h1 className=" font-semibold text-xl">Caseser Salad</h1>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        </div>
        <button className=" mt-5 px-5 py-3 text-yellow-500 border-b-4 border-yellow-500 hover:scale-105 active:scale-100 rounded-lg shadow-sm shadow-yellow-500">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
