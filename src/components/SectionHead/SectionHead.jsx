const SectionHead = ({ title, subtitle }) => {
  return (
    <div className=" text-center">
      <i className=" text-yellow-600">{subtitle}</i>
      <div className=" divider"></div>
      <h1 className=" text-4xl font-semibold">{title}</h1>
      <div className=" divider"></div>
    </div>
  );
};

export default SectionHead;
