const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/r6q1Krf/Banner.png)" }}>
        <div className="hero-overlay bg-opacity-80 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
            <div className="flex flex-row items-center mt-11 relative justify-center">
                <input type="text" placeholder="Search here...." className="text-black input input-borderd w-96  rounded-r-none "/>
                <button type="submit" className="bg-[#FF444A] text-white py-3 px-7 rounded-r-lg font-bold h-12">Search</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
