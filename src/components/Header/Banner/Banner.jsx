const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/r6q1Krf/Banner.png)" }}>
        <div className="hero-overlay bg-opacity-80 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
