"use client";
import { Carousel } from "antd";

const CarouselComponent = () => {
  const image1 = "../images/5m1.png";
  const image2 = "../images/mtspos2.png";
  const image3 = "../images/776.png";
  const image4 = "../images/empowered1.png";
  const image5 = "../images/200.jpg";

  const text1 = {
    backgroundColor: "green",
  };

  const contentStyle: React.CSSProperties = {
    height: "400px",
    lineHeight: "60px",
    display: "flex",
    alignItems: "center",
  };
  return (
    <>
      <div className="w-[98%] xl:pt-[16rem] lg:pt-[12rem] pt-[5rem]">
        <Carousel
          autoplay
          className="xl:w-[70rem] flex items-center mx-auto"
          responsive={[{ settings: "unslick", breakpoint: 100 }]}
        >
          <div className="firstImg">
            <div
              className="text-black lg:pb-[12rem] font-extrabold text-[1.4rem] md:text-[1.8rem] lg:text-[2.5rem] pl-4 ml-4"
              style={contentStyle}
            >
              5M+ Monthly Transaction Count
            </div>
          </div>
          <div className="secondImg">
            <h3
              className="text-white font-extrabold text-[1.4rem] md:text-[1.8rem] lg:text-[2.5rem] pl-4"
              style={contentStyle}
            >
              Here @ MTS, POS IS FREE!
            </h3>
          </div>
          <div className="thirdImg w-[100rem]">
            <div
              className="text-black font-extrabold text-[1.4rem] md:text-[1.8rem] lg:text-[2.5rem] lg:pt-[20rem] flex items-end justify-end pr-4"
              style={contentStyle}
            >
              Presence In 774 LGAs
            </div>
          </div>
          <div className="forthImg">
            <div
              className="text-white font-extrabold text-[1.4rem] md:text-[1.8rem] lg:text-[2.5rem] lg:pb-[22rem] pl-4"
              style={contentStyle}
            >
              Empowered 100K + Business
            </div>
          </div>
          <div className="fifthImg">
            <div
              className="text-black font-extrabold text-[1.8rem] lg:text-[2.5rem] pt-[16rem] lg:pt-[20rem] flex items-end justify-end pr-4"
              style={contentStyle}
            >
              $200M+ Processed Monthly
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        
      </div>

      {/* <Slider
        images={[image1, image2, image3, image4, image5]}
        texts={[
          "5M+ Monthly Transaction Count",
          "Here @ MTS, POS IS FREE!",
          "Presence In 774 LGAs",
          "Empowered 100K + Business",
          "$200M+ Processed Monthly",
        ]}
      /> */}

      <main className="py-20 ">
        <div className="grid sm:grid-cols-2 p-8 sm:h-[28rem] border justify-around items-center sm:w-[40rem] rounded-xl hover:shadow-xl">
          <img
            className="h-[20rem] w-[12rem] rounded-lg"
            src={"/images/agencyApp.png"}
            alt=""
          />
          <div className="space-y-2 mx-auto">
            <h2 className="font-bold lg:text-lg text-base">
              Download for Android
            </h2>
            <h3 className="pl-3 font-semibold py-2 lg:text-lg text-base">
              Over 100K+ Downloads
            </h3>
            <a
              href="https://play.google.com/store/apps/details?id=com.codevinci.ceva.xpress.agency&hl=en&gl=US"
              target="_blank"
            >
              <img className="" src={"/icons/playstore.svg"} alt="" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
export default CarouselComponent;
