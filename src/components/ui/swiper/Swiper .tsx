import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import image1 from "@src/assets/image/bedroom-4249736_1280 2.png";
import image2 from "@src/assets/image/berlin-wall-50730_1280 1.png";
import image3 from "@src/assets/image/books-1678014_1280 2.png";
import image4 from "@src/assets/image/nature-7189418_1280 2.png";
const HeaderSwiper = () => {
  return (
    <div className="w-full bg-white/30 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={"auto"}
        loop={true}
        freeMode={true}
        allowTouchMove={false}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="w-full h-[40px] flex items-center"
      >
        <SwiperSlide className="!w-auto">
          <div className="w-full h-full bg-black   text-lg font-medium text-primary">
            <img src={image1} className="object-cover h-full w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <div className="text-lg font-medium text-primary w-full h-full ">
            <img src={image2} alt="" className="object-cover h-full w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <div className=" w-full h-full text-lg font-medium text-primary">
            <img src={image3} alt="" className="object-cover h-full w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-auto  ">
          <div className=" h-full w-full">
            <img src={image4} className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <div className=" w-full h-full text-lg font-medium text-primary">
            <img src={image3} alt="" className="object-cover h-full w-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSwiper;
