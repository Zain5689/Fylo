const Productive = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 px-[10px]  sm:px-[50px] py-[100px] gap-[30px] element-center">
          <img src="/src/assets/illustration-stay-productive.png" alt="" />
          <div>
            <h3 className="font-semibold mb-2 text-[40px]">
              Stay Productive <br></br> whereever you are
            </h3>
            <p className="mb-4 font-normal text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              quaerat corrupti animi nihil eaque sunt vitae commodi suscipit
              illum molestiae accusamus recusandae consectetur sit iure quis,
              veniam magni aliquam impedit.
            </p>
            <p className="mb-4 font-normal text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              quaerat corrupti animi nihil eaque sunt vitae commodi suscipit
              illum molestiae accusamus recusandae consectetur sit iure quis,
              veniam magni aliquam impedit.
            </p>
            <a className="flex gap-[15px] text-[#62E0D9] ">
              See Fylo How Work
              <img
                src="/src/assets/icon-arrow.svg"
                width={30}
                alt=""
                className="animate-moveRight"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productive;
