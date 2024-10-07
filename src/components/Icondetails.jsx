// eslint-disable-next-line react/prop-types
const Icondetails = ({ img, title, desc }) => {
  return (
    <div className="w-[400px] max-w-full element-center flex-col py-[80p]">
      <img
        src={img}
        alt="icon"
        width={"80px"}
        height={"fit"}
        className="mb-6"
      />
      <div>
        <h3 className="font-semibold mb-2 text-25">{title}</h3>
        <p className="font-normal text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Icondetails;
