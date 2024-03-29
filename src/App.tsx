import { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import Home from "./pages/Home";
import Creator from "./pages/Creator";

const App: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const goToNextSlide = () => {
    if (swiperRef.current) swiperRef.current?.swiper.slideNext();
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) swiperRef.current?.swiper.slidePrev();
  };

  return (
    <Swiper
      ref={swiperRef}
      effect={"cube"}
      allowTouchMove={false}
      cubeEffect={{
        shadow: false,
        slideShadows: false,
      }}
      modules={[EffectCube]}
      loop={true}
      className="w-full h-[100dvh] overflow-hidden"
    >
      <SwiperSlide className="flex flex-col justify-evenly items-center h-full">
        <header>
          <h1 className="text-3xl font-serif">CV Creator</h1>
          <h2 className="text-xl">(Work in progress!)</h2>
        </header>
        <Home />
        <button type="button" className="text-xl" onClick={goToNextSlide}>
          Select
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col justify-evenly items-center h-full">
        <Creator goToPrevSlide={goToPrevSlide} />
      </SwiperSlide>
    </Swiper>
  );
};

export default App;
