const SlideCards = ({ product }) => {
  return (
    <div className=" max-sm:flex max-sm:justify-center">
      <img src={product.image} alt={product.id} className=" " />
    </div>
  );
};

export default SlideCards;
