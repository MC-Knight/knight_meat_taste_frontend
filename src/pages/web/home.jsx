import Menu from "./menu";

function Home() {
  return (
    <>
      <div className="w-full h-auto sm:h-[90vh] md:h-[90vh] lg:h-[90vh] flex items-start px-3 py-3 sm:py-10 sm:px-10">
        <div className="flex flex-col items-start gap-y-4 w-full sm:w-[50%] md:w-[50%] ">
          <p className="font-main-sans uppercase text-secondary/75">
            Dine Beyond Ordinary
          </p>
          <h1 className="font-main-sans font-semibold text-3xl sm:text-7xl md:text-7xl text-left leading-1 text-black">
            Flavor that <br></br> Speak louder <br></br>than words!
          </h1>
          <p className="text-grey text-left leading-1 w-[80%]">
            Embark on a culinary adventure that transcends taste, bringing you a
            symphony of flavors crafted for your well-being. Join us today and
            discover the art of enjoying meals that not only tantalize your
            taste buds but also nourish your body.
          </p>
          <button className="flex items-center justify-center w-[150px] rounded-3xl bg-secondary py-3 text-primary font-main-sans mt-3">
            Order Now
          </button>
        </div>
        <div className="w-[50%] hidden sm:block md:block">
          {/* <img src="/assets/images/home.png" alt="" /> */}
          <img src="/assets/images/home.png" alt="" />
        </div>
      </div>

      <div className="w-full h-auto bg-secondary/10 flex flex-col px-3 py-3  gap-y-10 sm:py-10 sm:px-10">
        <div className="w-full px-3 sm:px-10 md:px-10 flex items-center justify-between">
          <p className="font-main-sans uppercase text-secondary/75">Our Menu</p>

          <p className="text-grey text-left leading-1 w-[60%]">
            The flavors of the dishes are so rich, vibrant, and memorable that
            they leave a lasting impression on the diners. The emphasis on
            "speaking louder than words" implies that the culinary experience is
            so powerful that it transcends the need for verbal expression
          </p>
        </div>

        <Menu />
      </div>
    </>
  );
}

export default Home;
