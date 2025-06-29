import { useEffect, useState, useRef } from 'react';

const carImages = [
  {
    src:'/images/kv_the-kia-pv5_pc.jpg',
    title:'The Kia PV5',
    subtitle:'Play Your Vision'
  },
  {
    src:'/images/kv_the_kia_pv5_cargo_pc.jpg',
    title:'The Kia PV5 카고',
    subtitle:'Play Your Vision'
  },
  {
    src:'/images/kv_the-kia-ev4_0305_pc.jpg',
    title:'The Kia EV4',
    subtitle:'Play Your Vision'
  }
]



function NotSwiper(){
    
    return(
    <section className="relative w-full h-100vh md:h-[100vh] overflow-hidden">
        
        {
            carImages.map(({ src, title, subtitle }, idx) => (
            <div key={idx} className='flex w-full h-[100vh] md:h-[100vh] overflow-hidden'>
                <div className="relative w-full h-[100vh] overflow-hidden">
                    <img src={src} className="object-cover w-full h-[100vh]" alt={title} />
                    <div className="absolute top-2/3 left-10 md:left-20 text-white max-w-xl z-10 select-none flex flex-col justify-start">
                        <p className="text-sm md:text-3xl text-left">{subtitle}</p>
                        <h2 className="text-4xl md:text-7xl font-bold mb-12">{title}</h2>
                        <div className='flex gap-2'>
                          <button className='px-8 py-4 bg-white text-gray-700 text-xs mr-4'>자세히보기</button>
                          <button className='px-8 py-4 bg-gray-800 text-white text-xs transition hover:bg-gray-900'>견적내기</button>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
                </div>
            </div>
            ))
        }
    </section>
    )
}
export default NotSwiper;