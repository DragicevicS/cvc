import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { imageLoad } from "../imageLoad";

const Home: React.FC = () => {
  const [lightbox, setLightbox] = useState({ open: false, imgSrc: "" });

  const openLightbox = (imgSrc: string) => {
    setLightbox({ open: true, imgSrc });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, imgSrc: "" });
  };
  return (
    <>
      <h2>Welcome! To start, select a template:</h2>
      <main className="flex flex-col items-center w-full h-max">
        <Swiper
          effect={"cards"}
          modules={[EffectCards, Pagination, Autoplay]}
          cardsEffect={{
            perSlideOffset: 11,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
            pauseOnMouseEnter: true,
          }}
          className="pb-9 first:w-1/5"
        >
          {imageLoad.map((img, index) => {
            return (
              <SwiperSlide
                key={index}
                className="bg-black cursor-zoom-in active:cursor-grabbing"
                onClick={() => openLightbox(img)}
              >
                <img
                  src={img}
                  alt={`Template ${index}`}
                  loading="lazy"
                  className="w-full h-auto cursor-zoom-in active:cursor-grabbing"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {lightbox.open && (
          <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50 cursor-zoom-out"
            onClick={closeLightbox}
          >
            <img
              src={lightbox.imgSrc}
              alt="Selected"
              className="max-w-full max-h-full p-4"
            />
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
