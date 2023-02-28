// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import food01 from '../tanch_main/food1.jpg';
import food02 from '../tanch_main/food2.jpg';
import food03 from '../tanch_main/food3.jpg';
import food04 from '../tanch_main/food4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    <div className='foodlist row_c'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      loop = {true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={food01} alt="슬라이드 이미지1" />
      <div className='foodtitle'>
        음식1
      </div>
      </SwiperSlide>
      <SwiperSlide><img src={food02} alt="슬라이드 이미지2" />
      <div className='foodtitle'>
        음식2
      </div></SwiperSlide>
      <SwiperSlide><img src={food03} alt="슬라이드 이미지3" />
      <div className='foodtitle'>
        음식3
      </div></SwiperSlide>
      <SwiperSlide><img src={food04} alt="슬라이드 이미지4" />
      <div className='foodtitle'>
        음식4
      </div></SwiperSlide>
      <SwiperSlide><img src={food01} alt="슬라이드 이미지1" />
      <div className='foodtitle'>
        음식1
      </div></SwiperSlide>
      <SwiperSlide><img src={food02} alt="슬라이드 이미지2" />
      <div className='foodtitle'>
        음식2
      </div></SwiperSlide>
      <SwiperSlide><img src={food03} alt="슬라이드 이미지3" />
      <div className='foodtitle'>
        음식2
      </div></SwiperSlide>
      <SwiperSlide><img src={food04} alt="슬라이드 이미지4" />
      <div className='foodtitle'>
        음식4
      </div></SwiperSlide>
    </Swiper>
    </div>
  );
};