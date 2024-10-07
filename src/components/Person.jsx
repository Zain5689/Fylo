// eslint-disable-next-line react/prop-types
const Person = ({ img, title, desc, descs }) => {
  return (
    <div className="bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
      <p className="text-white text-sm font-normal tracking-[0.8px] mb-[30px]">
        {desc}
      </p>

      <div className="flex gap-[10px]">
        <img
          src={img}
          alt="icon"
          width={"50px"}
          height={"50px"}
          className="w-[50px] h-[50px] rounded-[50%] object-contain "
        />
        <div>
          <h3 className="font-semibold text-25">{title}</h3>
          <p className="opacity-70">{descs}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
