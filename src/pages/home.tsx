const Home = () => {
  return (
    <div className="flex flex-col md:flex-row ipad2 items-center justify-evenly lg:space-between min-h-screen bg-gradient-to-tr from-black via-[#1c1c1c] to-[#015516] text-white px-6 pt-20 lg:px-16 relative overflow-hidden">
      <div className="w-full lg:w-1/2 flex justify-center md:mb-20 mb-4">
        <img
          src="https://www.shutterstock.com/image-photo/gold-jewelry-bracelet-on-woman-600nw-2465653819.jpg"
          alt="home"
          className="rounded-t-full object-cover w-[370px] sm:w-[360px] md:w-[600px] lg:w-[420px] h-[380px] sm:h-[460px]  md:h-[350px] lg:h-[450px] transition-all duration-300"
        />
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-8 md:px-12 pb-8">
        <h1 className="font-serif text-[30px] sm:text-[45px] md:text-[37px] font-elegant-serif leading-tight -tracking-tight mb-6">
          Lifetime Jewelry 
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 font-light -tracking-tighter ">
          Remarkable Jewelry for the modern people
        </p>
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-tl-xl rounded-br-xl font-semibold transition tracking-wide hover:bg-yellow-400 hover:shadow-lg transform  duration-300 cursor-pointer">
          Contact Us
        </button>
      </div>

      {/* Sparkle Icon */}
      <div className="absolute top-25 right-10 text-4xl sm:text-7xl text-white hidden lg:block">
        ✦
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 right-0 hidden xl:block w-[600px] h-[200px]">
        <svg viewBox="0 0 600 200" className="w-full h-full">
          <path d="M0,100 C200,150 400,50 600,100" stroke="white" fill="transparent" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};

export default Home;
