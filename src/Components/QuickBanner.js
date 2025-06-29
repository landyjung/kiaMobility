import { ChevronRight } from "lucide-react";
import { useState } from "react";


const quickData = [
    {
        id:0,
        src:'/images/icon_car-05.svg',
        src2:'/images/icon_car-05-w.svg',
        text: '견적내기',        
    },
    {
        id:1,
        src:'/images/icon_steering.svg',
        src2:'/images/icon_steering-w.svg',
        text: '시승 신청',        
    },
    {
        id:2,
        src:'/images/icon_location.svg',
        src2:'/images/icon_location-w.svg',
        text: '판매 네트워크',        
    },
    {
        id:3,
        src:'/images/icon_gift-box.svg',
        src2:'/images/icon_gift-box-w.svg',
        text: '이 달의 구매 혜택',        
    },
]

function QuickBanner() {

     const [isHover, setIsHover] = useState(null);

    return (
    <div className="w-full max-w-[1440px] mx-auto">
        <ul className="flex flex-col md:flex-row gap-10">
            {
                quickData.map(({src, src2, text}, idx)=>(
                <li key={idx} className="bg-gray-200 w-full flex-1 hover:bg-slate-800 hover:text-white btn-quick" 
                    onMouseEnter={() => setIsHover(idx)} onMouseLeave={() => setIsHover(null)} >
                    <a href="#" className="flex flex-col justify-between md:gap-32" >
                        <div className="flex items-center gap-2">
                            <img  src={isHover === idx ? src2 : src}                                
                             alt={text} className="hover:brightness-900 w-10 md:w-12" />
                            <p className="text-sm md:text-lg md:font-bold">{text}</p>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <p className="text-sm md:text-lg md:font-semibold btn-more"></p>
                            <ChevronRight className="w-4 h-4 mt-1" />
                        </div>
                    </a>
                </li>
                ))
            }                    
        </ul>
    </div>
)
};
export default QuickBanner;
