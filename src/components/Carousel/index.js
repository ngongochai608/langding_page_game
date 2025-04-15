import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Carousel ({items, slidePerviewMobile, slidePerview}) {
  return (
    <div className='lg:max-w-[1480px] lg:mx-auto'>
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidePerviewMobile}
        spaceBetween={30}
        navigation
        loop
        breakpoints={{
          1024: {
            slidesPerView: slidePerview || slidePerviewMobile,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-24">
              <img src={item} alt={`logo-${index}`} className="h-full object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel