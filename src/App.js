import './App.css';
import { useState, useEffect } from 'react';
import { Search, Globe, SquareX, ChevronRight, ChevronDown, ChevronUp  } from 'lucide-react';
//import NotSwiper from './Components/NotSwiper';
import SliderContainer from './Components/SliderContainer';
import BestKia from './Components/BestKia';
import QuickBanner from './Components/QuickBanner';
import News from './Components/News';
import Footer from './Components/Footer';

const menuData =['차량','구매', '체험','이벤트', '고객지원','Discover Kia'];
const subMenuData = [
    {   id:0, 
        mainMenu: '차량', 
        subMenus:['EV','PBV','승용','RV','택시 & 버스 & 상용']
    },
    { 
        id:1,
        mainMenu:'구매',
        subMenus: ['견적 내기','이 달의 구매 혜택','구매 상담 신청','Kia Connect Store','모빌리티',]
    },
    {   
        id:2,
        mainMenu: '체험',
        subMenus: ['시승 신청','판매 네트워크','Kia 체험거점']
    },
    {   
        id:3,
        mainMenu:'이벤트' ,
        subMenus: ['진행 중인 이벤트','종료된 이벤트','당첨자 발표']
    },
    {
        id:4,
        mainMenu:'고객지원' ,
        subMenus: ['유지 & 관리','고객센터','구매 가이드','공지사항']
    },
    {
        id:5,
        mainMenu: 'Discover Kia',
        subMenus:['New Kia', '뉴스', '지속가능경영','사업장 안내', 'AutoLand 견학']
    },
    {
        id:6,
        mainMenu:'PBV' ,
        subMenus:['Vehicle' , 'Solution','With Kia PBV']
    }
]

const recommendMenu =[
    {id:1, title:'무슨 차를 살지 아직 결정 못 했다면', menuText:'Best Kia (구매 차량 추천)'},
    {id:2, title:'매월 나의 지불능력 범위 내의 차량 확인은', menuText:'이 달의 구매 혜택'},
    {id:3, title:'원하는 트림/칼라/옵션의 차량 이미지 및 구입비용을 보고 싶다면', menuText:'견적 내기'},
    {id:4, title:'차량의 옵션 기능이 궁금하다면', menuText:'사양 설명서'},
]

const bestSearch = ['카니발', '스포티지', '모닝', '네비게이션', '셀토스']

const quickData = [
    {
        id:0,
        src:'/images/subnav_util_icon01.svg',
        text: '견적내기',        
    },
    {
        id:1,
        src:'/images/subnav_util_icon02.svg',
        text: '시승 신청',        
    },
    {
        id:2,
        src:'/images/subnav_util_icon04.svg',
        text: '판매 네트워크',        
    },
    {
        id:3,
        src:'/images/subnav_util_icon05.svg',
        text: '이 달의 구매 혜택',        
    },
]

const pbvData = [
    {
        id:0,
        title:'Vehicle',
        subtitle: ['PV5 패신저','PV5 카고','PV5 오픈베드','PV5 내장/냉동탑차','PV7']
    },
    {
        id:1,
        title:'Solution',
        subtitle: ['About 솔루션','소프트웨어','서비스']
    },
    {
        id:2,
        title:'With Kia PBV',
        subtitle:['사업 및 비전','컨버전 파트너십','FAQ']
    }
]

function App() {
    const [isOpen, setIsOpen] = useState(false);    
    const [mobiletoggle, setMobiletoggle] = useState(false)
    const [searchForm, setSearchForm] = useState(false);
    const [searchTab, setSearchTab] = useState('recommend'); // 초기값: 추천메뉴
    const [selectedId, setSelectedId] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [pbvOpen, setPbvOpen] = useState(false);

    const toggleBtn = () => {
        setIsOpen(prev => !prev);        
    };

    const searchSection=()=>{
        setSearchForm(!searchForm);
    }

    const toggleMenu=(id)=>{
        setSelectedId(selectedId===id ? null:id);                
    }

    useEffect(() => {
    const deActive = () => {
        if (window.innerWidth >= 768) {
        setMobiletoggle(false);
        setIsOpen(false);        
        setSelectedId(null);
        }
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); 
        };
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    };


    window.addEventListener("resize", deActive);
    return () => window.removeEventListener("resize", deActive);
    }, []);
    
    
return (
    <div className="App">
        <header className={`headMenu absolute left-0 top-0 right-0 z-[10000] ${isOpen ? 'active' : ''}`}>
            <div className='flex justify-between items-center md:max-w-8xl mx-auto relative h-[100%] md:h-20'>
                <h1 className='absolute left-4 top-4 md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 w-[70px] md:w-[100px]'>
                    <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} className={`w-[70px] md:w-[100px] md:invert ${isOpen ? '' : 'invert'}`} alt="logo" />
                </h1>
                <nav className='mt-14 md:mt-0 hidden md:block w-full pl-4 md:pl-12'>
                    <ul className='flex flex-col items-start  md:flex-row gap-10'>
                        {
                            menuData.map((menu)=>(
                                <li key={menu} className='font-semibold md:text-white text-md text-gray-800 ' >{menu}</li>
                            ))
                        }
                    </ul>                    
                </nav>
                {
                    mobiletoggle &&  (
                    <div className='flex flex-col w-full h-[100vh]'>
                        <nav className={`flex flex-col justify-between w-full h-full pt-20 md:mt-0 md:hidden ${isOpen ? 'active' : ''} `}>
                            <ul className='flex flex-col items-start md:flex-row gap-2'>
                                {
                                    subMenuData.map((main)=>(
                                        <li key={main.id} className='font-semibold md:text-white text-lg text-gray-800 text-left w-full'>
                                            <a href="#" onClick={(e)=>{ e.preventDefault(); toggleMenu(main.id)}} className='block pl-4 pb-2 text-xl leading-9 flex gap-4 items-center'>
                                                {main.mainMenu} 
                                                {selectedId === main.id ? (<ChevronUp size={20} />) : (<ChevronDown size={20} />)}
                                            </a>                                            
                                            <div style={{maxHeight: selectedId === main.id ? `${main.subMenus.length * 48}px` : '0px',overflow:'hidden',transition:'max-height 0.3s ease-in-out',backgroundColor:'#f1f1f1'}}>
                                                <ul className='text-left py-4'>
                                                {
                                                    main.subMenus.map((sub, subidx) => (
                                                        <li key={subidx} className={`text-sm leading-9`}>
                                                            <a href="#" className="text-sm font-normal pl-8">
                                                                {sub}
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                                </ul>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='w-full'>
                                <ul className='flex flex-wrap grid grid-cols-2 w-full'>
                                    {
                                        quickData.map(({src, text}, idx)=>(
                                            <li key={idx} className='flex items-center gap-2  bg-gray-100 p-4 border-[1px] border-gray-300'>
                                                <img src={src} alt={text} className='w-[24px]' />
                                                <p className='text-xs'>{text}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className='bg-slate-900 h-24 w-full flex items-center text-white text-xs gap-12 justify-center'>
                                    <a>로그인</a>
                                    <span className='h-4 w-[1px] bg-white block'></span>
                                    <a>회원가입</a>
                                </div>
                            </div>
                        </nav> 
                          
                    </div>                                        
                    )
                }
                
                <div className='absolute right-0 top-6 flex gap-6 md:gap-8 text-md pr-4 md:pr-12 md:top-6'>
                    <a className='font-semibold text-white hidden md:block' onClick={()=> setPbvOpen(!pbvOpen)}>PBV</a>
                    <Globe className={`h-5 w-5 text-gray-800 md:hidden md:text-white ${isOpen? 'text-gray-800':'text-white'}`} />
                    <a href="#" className='font-semibold text-white items-center relative hidden md:flex gap-2' onClick={()=> setLangOpen(!langOpen)}>
                        KR {langOpen ? (<ChevronUp size={20} />) : (<ChevronDown size={20} />)}</a>
                            { langOpen && (
                                <div className="absolute z-5 top-10 left-12 w-16 bg-white transition-all 
                                    border border-gray-300 rounded-md py-2 shadow-lg text-xs sm:text-sm text-gray-500">
                                    <ul className=" leading-10 text-lg"> 
                                        <li className='hover:bg-slate-800 hover:text-white cursor-pointer'>KR</li>
                                        <li className='hover:bg-slate-800 hover:text-white cursor-pointer'>EN</li>
                                        <li className='hover:bg-slate-800 hover:text-white cursor-pointer'>CN</li>
                                    </ul>
                                </div>
                            )}
                    <Search className={`h-5 w-5 text-gray-800 md:text-white cursor-pointer ${isOpen? 'text-gray-800':'text-white'}`} onClick={()=>searchSection()} />
                    <a className='font-semibold text-white hidden md:block'>LOGIN</a>
                    <button className='togggle_btn flex flex-col justify-center gap-[6px] w-4 h-4 md:hidden' onClick={()=>{setMobiletoggle(!mobiletoggle); toggleBtn()}}>
                        <span className={`w-5 h-[2px] block rounded-full ${isOpen? 'bg-gray-800 translate-y-2 rotate-45':'bg-white'}`}></span>
                        <span className={`w-5 h-[2px] block rounded-full ${isOpen? 'bg-gray-800 -rotate-45':'bg-white'}`}></span>
                    </button>
                </div>
                
                
            </div>
            {
                pbvOpen && (
                    <div className='absolute top-16 left-0 w-full h-auto z-100 bg-white flex flex-col items-end rounded-lg'>
                        <div className='py-12'>
                            <ul className='w-[600px] flex gap-24 text-left'>
                                {
                                    pbvData.map((main)=>(
                                        <li key={main.id} className=' font-semibold leading-9 text-2xl text-slate-600'>
                                            <a>{main.title}</a>
                                            <ul>
                                                {
                                                    main.subtitle.map((sub, subidx)=>(
                                                        <li key={subidx} className='font-normal text-base leading-9 text-slate-600'>{sub}</li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    ))
                                }                                
                            </ul>
                        </div>
                        <div className='flex  w-full bg-gray-100 rounded-b-lg'>
                            <ul className='flex flex-wrap w-full bg-gray-100'>
                                {
                                    quickData.map(({src, text}, idx)=>(
                                        <li key={idx} className='grid grid-cols-1'>
                                            <a className='flex flex items-center gap-2 p-4 border-[1px]'>
                                                <img src={src} alt={text} className='w-[24px]' />
                                                <p className='text-xs'>{text}</p>
                                            </a>                                        
                                        </li>
                                    ))
                                }                            
                            </ul>
                            <a onClick={() => setPbvOpen(false)} className='flex flex-row items-center gap-1 cursor-pointer text-xs md:text-sm w-16'><SquareX className='w-4 h-4 cursor-pointer' />닫기</a>
                        </div>                        
                    </div>
                )
            }      
            {
                searchForm && (
                    <div className='flex flex-col w-full z-100'>
                        <div className='fixed top-0 left-0 bg-white mx-auto min-h-[120px] md:h-[150px] w-full flex flex-col justify-center'>
                            <div className='max-w-7xl w-full  mx-auto flex gap-2 px-4 md:px-0'>
                                <Search className='w-10 h-10' />
                                <input type='text'  className='border-none px-2 py-2 w-full' placeholder='검색어를 입력하세요.' />
                                <SquareX onClick={() => setSearchForm(false)}  className='w-12 h-12 cursor-pointer' />
                            </div>
                        </div>
                        <div className='max-w-7xl w-full  bg-white absolute left-1/2 -translate-x-1/2 top-[118px]  rounded-b-lg border-2 border-slate-300'>
                            <div>
                                <ul className="flex md:hidden">
                                    <li className="flex-1">
                                        <button
                                        onClick={() => setSearchTab('recommend')}
                                        className={`h-16 w-full ${searchTab === 'recommend' ? 'border-b-2 border-slate-900' : 'border-b-[1px] border-slate-200'}`}
                                        >
                                        추천메뉴
                                        </button>
                                    </li>
                                    <li className="flex-1">
                                        <button
                                        onClick={() => setSearchTab('popular')}
                                        className={`h-16 w-full ${searchTab === 'popular' ? 'border-b-2 border-slate-900' : 'border-b-[1px] border-slate-200'}`}
                                        >
                                        인기검색어
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col md:flex-row py-10 px-10 gap-24">
                                 {
                                    (isMobile ? searchTab === 'recommend' : true) && (
                                    <ul className={`w-full md:w-3/5 flex flex-col gap-6 ${searchTab === 'recommend' ? '' : 'hidden'} md:flex`}>
                                    <h2 className="text-left font-extrabold font-gray-900 text-mb hidden md:block">추천메뉴</h2>
                                    {
                                        recommendMenu.map(({ title, menuText }, idx) => (
                                            <li className="flex flex-col items-start md:flex-row md:justify-between" key={idx}>
                                                <p className="text-gray-600 text-left pb-4">{title}</p>
                                                <span className="font-bold text-sm">
                                                    {menuText} <ChevronRight className="inline w-3 h-3" />
                                                </span>
                                            </li>
                                        ))
                                    }
                                    </ul>
                                )}

                                {
                                    (isMobile ? searchTab === 'popular' : true) && (
                                    <ul className={`w-full md:w-3/5 flex flex-col gap-6  ${searchTab === 'popular' ? '' : 'hidden'} md:flex`}>
                                    <h2 className="text-left font-extrabold font-gray-900 text-mb hidden md:block">인기검색어</h2>
                                    {
                                        bestSearch.map((best, idx) => (
                                        <li className="flex justify-start" key={idx}>
                                            <p>{best}</p>
                                        </li>
                                    ))}
                                    </ul>
                                )}
                            </div>
                            {/* <div className='flex flex-col md:flex-row py-10 px-10 gap-24' >
                                <ul className={`w-full md:w-3/5 flex flex-col gap-6 ${setSearchTab? '' : 'tabActive'}`}>
                                    <h2 className='text-left font-extrabold font-gray-900 text-mb hidden md:block'>추천메뉴</h2>
                                    {
                                        recommendMenu.map(({ title, menuText }, idx) => (
                                            <li className='flex flex-col items-start md:flex-row md:justify-between' key={idx}>
                                                <p className='text-gray-600 text-left'>{title}</p>
                                                <span className='font-bold text-sm'>{menuText} <ChevronRight className="inline w-3 h-3" /></span>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <ul className={`w-full md:w-3/5 flex flex-col gap-6 ${setSearchTab? '' : 'tabActive'}`}>
                                    <h2 className='text-left font-extrabold font-gray-900 text-mb hidden md:block'>인기검색어</h2>
                                    {
                                        bestSearch.map((best) => (
                                            <li className='flex justify-start' key={best}><p>{best}</p></li>
                                        ))
                                    }
                                </ul>
                            </div> */}
                            <div className='bg-gray-200 flex justify-end p-2'>
                                <a onClick={() => setSearchForm(false)} className='flex flex-row items-center gap-1 cursor-pointer text-xs md:text-sm'><SquareX className='w-4 h-4 cursor-pointer' />닫기</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </header>
        <SliderContainer />
        <BestKia />
        <QuickBanner />
        <News />
        <Footer />
    </div>
);
}

export default App;
