const Contact = () => {
  return (
    <section className="my-[50px] mb-11">
      <div className="container relative">
        <div className="absolute left-[50%] translate-x-[-50%] top-[60%] translate-y-[-60%] bg-[#21293c] rounded-[5px] p-[30px] text-center">
          <h3 className="font-semibold mb-3 text-[30px]">
            Get early acess today
          </h3>
          <p className="font-normal text-sm mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut
            praesentium placeat soluta at, error, laborum temporibus aperiam
            facere quae ipsa molestiae voluptatibus natus quia! Blanditiis esse
            ratione commodi asperiores.
          </p>
          <form className="flex justify-around flex-wrap ">
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-96 px-10  py-[8px]  rounded-[20px] mb-2"
            />
            <button className="bg-[#42b0d1] py-[8px] px-[50px] rounded-[50px] transition-colors duration-300 ease-in-out hover:bg-hsl-176-68-64">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
