const TopFooter = () => {
  return (
    <div>
      <div className="mt-10 bg-[#FFEC8A] w-full py-8 px-4">
        <p className="text-center text-lg font-semibold sm:text-base">
          Get personal learning recommendations based on your needs
        </p>
        <button className="mx-auto border text-sm border-[#FF9500] text-[#FF9500] flex items-center justify-center rounded-lg px-4 py-2 mt-5">
          Get Started
        </button>
      </div>

      <div className="w-full bg-[#1D2026] py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 text-white gap-10 lg:max-w-[1400px] mx-auto">
          <div className="md:col-span-6 text-center md:text-left">
            <p className="text-2xl lg:text-4xl md:text-5xl font-bold">
              Start learning with 25.1k students around the world.
            </p>
            <div className="flex lg:w-full w-[70%] mx-auto flex-col md:flex-row mt-8 items-center gap-4">
              <button className="bg-[#F39200] px-5 py-3 w-full md:w-auto">
                Join The Family
              </button>
              <button className="bg-[#ffffff14] px-5 py-3 w-full md:w-auto">
                Browse all courses
              </button>
            </div>
          </div>

          <div className="md:col-span-6 flex  items-center justify-evenly w-full gap-6">
            <div className="text-center">
              <p className="lg:text-4xl text-2xl">1.6K</p>
              <p className="text-sm text-gray-300">Online courses</p>
            </div>
            <div className="text-center">
              <p className="lg:text-4xl text-2xl">150</p>
              <p className="text-sm text-gray-300">Certified Instructor</p>
            </div>
            <div className="text-center">
              <p className="lg:text-4xl text-2xl">100%</p>
              <p className="text-sm text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-700"></div>
    </div>
  );
};

export default TopFooter;
