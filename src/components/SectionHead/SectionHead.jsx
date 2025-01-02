const SectionHead = ({ title, subtitle, section }) => {
  return (
    <div className=" text-center">
      <i className=" text-yellow-600">{subtitle}</i>
      <div className={` ${section === 4 && " divider-primary"} divider `}></div>
      <h1 className=" text-4xl max-md:text-3xl max-sm:text-2xl font-semibold">{title}</h1>
      <div className={`${section === 4 && " divider-primary"} divider`}></div>
    </div>
  );
};

export default SectionHead;
