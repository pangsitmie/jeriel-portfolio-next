const Hero = () => {
  return (
    <div className=" bg-black h-screen flex items-center justify-center">
      <section className="relative">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5  max-w-7xl mx-auto text-center">
            <h2 className="text-9xl text-white mx-auto md:text-6xl mb-6">
              Let's talk future
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex justify-center items-center"
            >
              <button className="flex items-center justify-center gap-x-1 py-2.5 px-4 mt-3 text-black font-medium bg-white active:bg-zinc-900 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                Learn More
              </button>
            </form>
          </div>
        </div>
        {/* <div
          className="absolute inset-0 m-auto max-w-xl h-[100vh] blur-[208px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div> */}
      </section>
    </div>
  );
};

export default Hero;
