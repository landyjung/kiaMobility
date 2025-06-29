import { useState } from "react";
import { ChevronDown, ChevronUp, Globe, Home } from "lucide-react";

const footerMenu = ['판매네트워크', '견적내기', '구매 상담 신청', '시승 신청','기아 렌터카']
const footerLink = ['New Kia', '공지사항', '뉴스', 'IR', '채용']
const privateMenu = ['개인정보 처리방침', '프라이버시 센터','이용약관', '윤리경영 사이버 감사실', '전자공고','사이트맵']
const webAward = [
    {
        id:0,
        src:`${process.env.PUBLIC_URL}/images/awards_ks-sqi.png`,
        text: {
            text1:'25년 국가고객만족도(NCSI)',
            text2:'중형승용(6년 연속), 컴팩트RV(3년 연속)',
            text3:'대형RV(3년 연속), 전기차(2년 연속) 1위'
        }
    },
    {
        id:1,
        src:`${process.env.PUBLIC_URL}/images/awards_ksqi-callcenter.png`,
        text:{
            text1:'25년 한국 산업의 서비스 품질지수 ',
            text2:'우수 콜센터 (22년 연속) 및',
            text3:'고객감동 콜센터 선정'
        }
    },
    {
        id:2,
        src:`${process.env.PUBLIC_URL}/images/awards-cnba.png`,
        text:{
            text1:'24년 한국산업의 서비스 품질지수',
            text2:'자동차 A/S부문 1위 (11년 연속)',
        }
    },
    {
        id:3,
        src:`${process.env.PUBLIC_URL}/images/awards_ksqi-car.png`,
        text:{
            text1:'25년 대한민국 국가브랜드 대상',
            text2:'자동차 멤버십 부문 1위 (14년 연속)'
        }
    },
    {
        id:4,
        src:`${process.env.PUBLIC_URL}/images/awards_nsci.png`,
        text:{
            text1:'24년 한국서비스품질지수(KS-SQI)',
            text2:'자동차 판매서비스 부문 1위 (5년 연속)'
        }
    },
    {
        id:5,
        src:`${process.env.PUBLIC_URL}/images/awards_wa.png`,
        text:{text1:'웹 접근성 품질인증'}
    },

]

function Footer() {
    const [relatedOpen, setRelatedOpen] =useState(false);
    const [snsOpen, setSnsOpen] =useState(false);
    

  return (
    <div className="text-slate-400">
        <div className="bg-[#05141f] w-full px-8 md:px-16 pt-12">
            <h2 className="mb-12"><img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" className="invert w-[100px]" /></h2>
            <div  className="flex justify-between">
                <div className="flex">
                    <ul className="w-96 flex-none text-white font-bold text-left flex flex-col gap-8">
                        {
                            footerMenu.map((fmenu, idx)=>(
                                <li key={fmenu} className="text-sm font-semibold md:text-base">{fmenu}</li>
                            ))
                        }
                    </ul>
                    <ul className="text-gray-300 text-left md:flex flex-col gap-2 text-sm hidden">
                        {
                            footerLink.map((link, idx)=>(
                                <li key={link}>{link}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <ul className="md:flex gap-4 hidden">
                        <li><img src={`${process.env.PUBLIC_URL}/images/ic_kia_members.png`} alt="members" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/ic_post.png`} alt="post" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/ic_facebook.svg`} alt="facebook" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/ic_youtube.svg`} alt="youtube" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/ic_instagram.svg`} alt="instagram" /></li>
                    </ul>
                </div>
            </div>
             <div className="flex flex-col md:flex-row justify-between py-8">
                <div className="flex gap-2 border-b-2 border-slate-800 md:border-none py-4 font-bold text-white"><Home className="w-4" />홈</div>
                <div className="flex  flex-col items-center md:flex-row">
                    <div className="flex-row items-center  w-20 h-8 leading-2 font-semibold text-white hidden md:flex">
                        <Globe className="w-4 h-4" /><span>한국</span>
                    </div>
                    <div className="relative w-full md:hidden">
                        <button onClick={()=> setSnsOpen(!snsOpen)}
                            className="
                                w-full text-white  flex justify-between gap-2 items-center 
                                py-4 text-xs border-b-[1px] border-slate-800 ">
                            SNS {snsOpen ? (<ChevronDown size={16} />) : (<ChevronUp size={16} />)}
                        </button>

                        { snsOpen && (
                            <div className="absolute z-20 bottom-[50px] mt-1 left-0 w-full bg-white transition-all 
                                border border-gray-300 rounded-md p-3 shadow-lg text-xs sm:text-sm text-gray-500">
                                <ul className="text-left leading-10"> 
                                    <li>기아멤버스</li>
                                    <li>네이버 블로그</li>
                                    <li>네이버 블로그</li>
                                    <li>인스타그램</li>
                                    <li>유튜브</li>
                                </ul>
                            </div>
                        )}
                        
                    </div>
                    <div className="relative w-full md:w-auto">
                        <button onClick={()=> setRelatedOpen(!relatedOpen)}
                            className="
                                w-full md:w-80 text-white  flex justify-between gap-2 items-center 
                                py-4 text-xs border-b-[1px] border-slate-800  md:border-[1px] md:px-4">
                            FamilySite {relatedOpen ? (<ChevronDown size={16} />) : (<ChevronUp size={16} />)}
                        </button>

                        { 
                            relatedOpen && (
                                <div>
                                    <div className="absolute z-20 bottom-[50px] mt-1 left-0 w-full bg-white 
                                        border border-gray-300 rounded-md p-3 shadow-lg text-xs sm:text-sm text-gray-500">
                                        <ul className="text-left leading-10"> 
                                            <li>현대자동차 그룹</li>
                                            <li>브랜드</li>
                                            <li>기아 멤버스 블로그</li>
                                            <li>기아 드라이빙 아카데미</li>
                                            <li>인재 채용</li>
                                        </ul>
                                    </div>
                                </div>                         
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#010e18] p-8 text-sm">
            <div className="flex flex-col md:flex-row md:justify-between gap-6 items-center text-xs md:text-sm mb-6 md:mb-8">
                <p className="order-2 w-[200px] md:order-1">&copy; Kia Corp. All rights reserved</p>
                <ul className="w-[300px] md:min-w-[750px] flex gap-4 md:gap-10 flex-wrap order-1 md:order-2">
                    {
                        privateMenu.map((pmenu)=>(
                            <li key={pmenu}>{pmenu}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="hidden md:block">
                <ul className="flex flex-row text-xs  flex-wrap gap-6" >
                    {
                        webAward.map(({src, text}, id)=>(
                            <li key={id} className="min-w-64 flex gap-3 flex-1">
                                <img src={src} className="w-8 h-4" alt={text} />
                                <div className="text-left leading-6">
                                    <p>{text.text1}</p>
                                    <p>{text.text2}</p>
                                    <p>{text.text3}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}  
export default Footer;