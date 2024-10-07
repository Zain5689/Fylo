const Landing = () => {
  return (
    <div className="container flex flex-col justify-center items-center h-screen">
      <div className="pt-[100px] w-[865px] max-w-full mx-auto text-center">
        <img
          src="/src/assets/illustration-intro.png"
          alt="illustration-intro"
          className="mb-[20px] mx-auto"
        />

        <div className="w-[600px] max-w-full mx-auto">
          <h2 className="font-semibold text-20px sm:text-[30px] mb-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            sequi.
          </h2>
          <p className="font-normal text-sm mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            odio enim blanditiis quas minus libero id perspiciatis eos nisi
            labore. Exercitationem laboriosam assumenda nihil quaerat eum
            quisquam distinctio, esse necessitatibus!
          </p>
          <button className="bg-[#42b0d1] py-[8px] px-[50px] mb-6 rounded-[50px] transition-colors duration-300 ease-in-out hover:bg-hsl-176-68-64">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
