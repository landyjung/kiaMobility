import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay  } from 'swiper/modules';
import gsap from "gsap";
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const carImages = [
  {
    src:'/images/kv_rental_pc_240527.jpg',
    title:'기아렌터카',
    subtitle:'스마트한 카 라이프의 시작! 기아렌터카',
    btn1:'렌터카 견적 내기',
    btn2:'바로가기',
  },
  {
    src:'/images/kv_the_kia_k5_k8_pc.jpg',
    title:'The 2026 K5',
    subtitle:'Best Selection 트림 신규 추가',
    btn1:'자세히보기',
    btn2:'견적내기',
  },
  {
    src:'/images/kv_the-kia-pv5_pc.jpg',
    title:'The Kia PV5',
    subtitle:'Play Your Vision',
    btn1:'자세히보기',
    btn2:'견적내기',
  },
  {
    src:'/images/kv_the_kia_pv5_cargo_pc.jpg',
    title:'The Kia PV5 카고',
    subtitle:'Play Your Vision',
    btn1:'자세히보기',
    btn2:'견적내기',
  },
  {
    src:'/images/kv_the-kia-ev4_0305_pc.jpg',
    title:'The Kia EV4',
    subtitle:'Play Your Vision',
    btn1:'자세히보기',
    btn2:'견적내기',
  }
]

function SliderContainer(){
    const swiperRef = useRef(null);
  
    const slideChange = (activeIndex) => {
      if( !swiperRef.current || !swiperRef.current.slides ) return;
      if( activeIndex<0 ) return;
      const activeSlide = swiperRef.current?.slides[activeIndex];
      if(!activeSlide) return;
      
      const textElement = activeSlide.querySelector('.ani_text1');
      const textElement2 = activeSlide.querySelector('.ani_text2');
      if( textElement ){
        gsap.fromTo(
            textElement,
            { x: '60%', y: 0, opacity: 0.2 },
            { x: 0, y: 0, opacity: 1, delay:'0.5s', duration: 1, ease:'power2.out'}
          );
      }
      if( textElement2 ){
        gsap.fromTo(
            textElement2,
            { x: '70%', y: 0, opacity: 0.1 },
            { x: 0, y: 0, opacity: 1, duration: 1.5, ease:'power2.out'}
          );
      }
  
  };
  

    return(
    <section className="relative w-full h-100vh md:h-[100vh] overflow-hidden">
        <Swiper init="false" 
          pagination={{ clickable: true }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',}}
          className="mySwiper h-auto"
          modules = {[Navigation, Pagination, Autoplay ]}
          loop = {true}
          slidesPerView = {1}
          autoPlay = {{ delay:7000, disableOnInteraction:false }}
          onSlideChange={(swiper)=> slideChange(swiper.activeIndex)} 
          onSwiper={(swiper)=>{
            swiperRef.current = swiper;
            setTimeout(()=>{
              if( swiper.slides && swiper.slides.length>0 ){
                slideChange(0);
              }
            }, 100)}}
        >
        {
            carImages.map(({ src, title, subtitle, btn1, btn2 }, idx) => (
            <SwiperSlide key={idx} className='h-100vh'>
                <div className='flex w-full h-auto md:h-[100vh] overflow-hidden relative'>
                  <div className="relative w-full h-[100vh] overflow-hidden">
                      <img src={src} className="object-cover object-center w-full h-[100vh]" alt={title} />
                      <div className="absolute top-2/3 left-10 md:left-20 text-white max-w-2xl z-10 select-none flex flex-col justify-start">
                          <p className="ani_text2 text-sm md:text-xl text-left mb-4">{subtitle}</p>
                          <h2  className="ani_text1 text-3xl md:text-5xl font-bold mb-12 text-left">{title}</h2>
                          <div className='flex gap-2'>
                            <button className='px-8 py-4 bg-white text-gray-700 text-xs md:text-sm mr-4 btn-basic'>{btn1}</button>
                            <button className='px-8 py-4 bg-gray-800 text-white text-xs md:text-sm transition btn-primary'>{btn2}</button>
                          </div>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
                  </div>
              </div>              
            </SwiperSlide>
            ))
        }
            <button className="swiper-button-prev absolute top-1/2 left-4 z-20 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition-opacity" aria-label="previous slide"></button>
            <button className="swiper-button-next absolute top-1/2 right-4 z-20 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition-opacity" aria-label="next slide"></button>
        </Swiper>
        
    </section>
    )
}
export default SliderContainer;