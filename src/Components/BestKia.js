import { useState } from "react";
const bestCategories =[ '최근 출시','연비 효율','적재 공간','안전성'];
const bestItem = [
    {
        category : '최근 출시',
        id:11,
        name:'The Kia PV5 패신저',
        num:'TOP 1',
        subtitle1 : 'EV전기차',
        subtitle2 :'플러스 5인승(2-3-0)',
        img : `${process.env.PUBLIC_URL}/images/pv5-passenger_w1pa5vc31_b_sml.PNG`,
        title01:'출시일',
        title02:'배기량',
        title03:'최고 출력',
        title04:'외장 컬러',
        text01:'2025-06-10',
        text02:'1,999cc',
        text03:'120kW / 163 ps',
        text04:'소프트 민트',
        options: 
            {
                option1 :'드라이브 와이즈',
                option2 :'모니터링',
                option3 :'아웃도어팩 '
            },
        price : '54,570,000'
    },
    {
        category : '최근 출시',
        id:12,
        name:'The Kia PV5 카고',
        num:'TOP 2',
        subtitle1 : 'EV전기차',
        subtitle2 :' 롱레인지 4DR',
        img : `${process.env.PUBLIC_URL}/images/pv5-cargo_w2cd2vb31_b_ud.png`,
        title01:'출시일',
        title02:'배기량',
        title03:'최고 출력',
        title04:'외장 컬러',
        text01:'2025-06-10',
        text02:'1,999cc',
        text03:'120 kW / 163 ps',
        text04:'클리어 화이트',
        options: 
            {
                option1: '카고룸 바닥',
                option2: '컨비니언스',
                option3: 'L-Track 패키지'
            },
        price : '58,970,000'
    },
    {
        category : '최근 출시',
        id:13,
        name:'The 2025 Morning',
        num:'TOP 3',
        subtitle1 : '1.0 가솔린 ',
        subtitle2 :' 시그니처 A/T',
        img : `${process.env.PUBLIC_URL}/images/morning_jajh5am3a_a_m7g.png`,
        title01:'출시일',
        title02:'배기량',
        title03:'최고 출력',
        title04:'외장 컬러',
        text01:'2025-05-15',
        text02:'998 cc',
        text03:'76 ps / 6,200 rpm',
        text04:'어드벤쳐러스 그린',
        options: {
                option1: '8인치 내비게이션(시그니처)',
                option2: '선루프',
                option3: '스타일(시그니처)'
            },
        price : '19,700,000'
    },
    {
        category : '연비 효율',
        id:21,
        name:'니로',
        num:'TOP 1',
        subtitle1 : '1.6 하이브리드 ',
        subtitle2 : ' 베스트 셀렉션 2WD DCT',
        img : `${process.env.PUBLIC_URL}/images/niro-ev_sgjj5vf35_g_swp.png`,
        title01:'복합 연비',
        title02:'도심 연비',
        title03:'고속도로 연비',
        title04:'배기량',
        text01:'20.8 km/ℓ',
        text02:'21.9 km/ℓ',
        text03:'19.6 km/ℓ',
        text04:'1,580 cc',
        options: {
                option1: '컴포트(스마트 셀렉션)',
                option2: '하만카돈 사운드',
                option3: '하이테크 등'
            },
        price : '38,300,000'
    },
    {
        category : '연비 효율',
        id:22,
        name:'K5',
        num:'TOP 2',
        subtitle1 : '2.0 하이브리드 ',
        subtitle2:' 시그니처 A/T',
        img : `${process.env.PUBLIC_URL}/images/k5_dljs49f36_a_abp.png`,
        title01:'복합 연비',
        title02:'도심 연비',
        title03:'고속도로 연비',
        title04:'배기량',
        text01:'18.8 km/ℓ',
        text02:'18.7 km/ℓ',
        text03:'18.9 km/ℓ',
        text04:'1,999 cc',
        options:  {
                option1: '컴포트(시그니처)',
                option2: '파노라마 선루프'
            },
        price : '41,970,000 원'
    },
    {
        category : '연비 효율',
        id:23,
        name:'K8',
        num:'TOP 3',
        subtitle1 : '1.6 터보 하이브리드 ',
        subtitle2:' 노블레스 A/T',
        img : `${process.env.PUBLIC_URL}/images/k8_gljs49b34_b_agt.png`,
        title01:'복합 연비',
        title02:'도심 연비',
        title03:'고속도로 연비',
        title04:'배기량',
        text01:'17.2 km/ℓ',
        text02:'17.0 km/ℓ',
        text03:'16.9 km/ℓ',
        text04:'1,598 cc',
        options: {
                option1: '드라이브 와이즈',
            },
        price : '48,330,000'
    },
    {
        category : '적재 공간',
        id:31,
        name:'카니발',
        num:'TOP 1',
        subtitle1 : '1.6 하이브리드 ',
        subtitle2: ' 9인승 시그니처',
        img : `${process.env.PUBLIC_URL}/images/carnival_kpjg99d37_a_abp.png`,
        title01:'트렁크 용량',
        title02:'복합 연비',
        title03:'배기량',
        title04:'최고 출력',
        text01:'1,672 ℓ',
        text02:'14 km/ℓ',
        text03:'16.9 km/ℓ',
        text04:'180 ps / 5,500 rpm',
        options: {
            option1:'스타일(9인승, 시그니처)',
        },
        price : '49,110,000'
    },
    {
        category : '적재 공간',
        id:32,
        name:'쏘렌토',
        num:'TOP 2',
        subtitle1 : '1.6 터보 하이브리드 ',
        subtitle2: '  6인승 시그니처 2WD A/T',
        img : `${process.env.PUBLIC_URL}/images/sorento_mqjj69e36_a_agt.png`,
        title01:'트렁크 용량',
        title02:'복합 연비',
        title03:'배기량',
        title04:'최고 출력',
        text01:'705 ℓ',
        text02:'14.8 km/ℓ',
        text03:'1,598 cc',
        text04:'180 ps / 5,500 rpm',
        options: {
            option1:'컴포트(시그니처)',
            option2:'드라이브 와이즈',
            option3:'HUD + 빌트인 캠 2 등',
            option4:'KRELL 프리미엄 사운드',
        },
        price : '51,120,000'
    },
    {
        category : '적재 공간',
        id:33,
        name:'스포티지',
        num:'TOP 3',
        subtitle1 : '1.6 하이브리드  ',
        subtitle2: 'X-Line 4WD A/T 프리미엄옵션',
        img : `${process.env.PUBLIC_URL}/images/sportage_nqjj59ha5_b_mgg.png`,
        title01:'트렁크 용량',
        title02:'복합 연비',
        title03:'배기량',
        title04:'최고 출력',
        text01:'637 ℓ',
        text02:'14.3 km/ℓ',
        text03:'1,598 cc',
        text04:'180 ps / 5,500 rpm',
        options: {
            option1:'빌트인 캠 2',
            option2:'드라이브 와이즈',
            option3:'KRELL 프리미엄 사운드(8스피커, 외장앰프) 등',
            option4:'K모니터링',
        },
        price : '48,700,000'
    },
    
    {
        category : '안전성',
        id:41,
        name:'EV6',
        num:'TOP 1',
        subtitle1 : 'EV전기차',
        subtitle2:' 롱레인지 어스 2WD A/T',
        img : `${process.env.PUBLIC_URL}/images/ev6_cvjj5ve35_a_ism.png`,
        title01:'종합 안전 등급',
        title02:'충돌 안전',
        title03:'종합 안전 점수',
        title04:'배기량',
        text01:'1등급',
        text02:'신차 안전도 평가 안내',
        text03:'91.90점',
        text04:'84 kWh',
        options: {
            option1:'빌트인 캠',
            option2:'Lexicon 프리미엄 사운드',
            option3:'프리미엄 팩 등',
        },
        price : '62,820,000'
    },
    {
        category : '안전성',
        id:42,
        name:'K9',
        num:'TOP 2',
        subtitle1 : '3.3 가솔린 터보 ',
        subtitle2:'  마스터즈 AWD',
        img : `${process.env.PUBLIC_URL}/images/k9_jrjs4bna8_q_swp.png`,
        title01:'종합 안전 등급',
        title02:'충돌 안전',
        title03:'종합 안전 점수',
        title04:'배기량',
        text01:'1등급',
        text02:'신차 안전도 평가 안내',
        text03:'92 점',
        text04:'3,342 cc',
        options: {
            option1:'VIP 컬렉션(마스터즈)',
            option2:'선루프',
        },
        price : '91,330,000'
    },
    {
        category : '안전성',
        id:43,
        name:'EV9',
        num:'TOP 3',
        subtitle1 : 'EV전기차 ',
        subtitle2:' GT-line AWD A/T 스타일',
        img : `${process.env.PUBLIC_URL}/images/k8_gljs49b34_b_agt.png`,
        title01:'종합 안전 등급',
        title02:'충돌 안전',
        title03:'종합 안전 점수',
        title04:'배기량',
        text01:'1등급',
        text02:'신차 안전도 평가 안내',
        text03:'92.90점 점',
        text04:'99.8 kWh',
        options: {
            option1:'스타일(GT-line)',
            option2:'6인승(스위블)',
        },
        price : '85,070,000'
    }

]

function BestKia() {
    const [selectedCategory, setSelectedCategory] = useState('최근 출시');
    /* const [page, setPage] = useState(1); */
    const itemsPerPage=3;

    const filterBest = selectedCategory==='최근 출시' ? bestItem:bestItem.filter((item)=>item.category === selectedCategory );
    const filterToShow = filterBest.slice(0, itemsPerPage)
    
return (
    <div className="w-full max-w-9xl mx-auto h-auto">
        <h2 className="text-5xl font-bold my-20">Best Kia</h2>
        <div>
            <nav className="w-full max-w-9xl mx-auto border-b border-3 mb-20">
                {/* best tab */}
                {
                        bestCategories.map((cat)=>(
                            <button key={cat} onClick={()=>{ setSelectedCategory(cat) }}
                                className={`px-6 py-2 transition-colors
                                    ${selectedCategory===cat ? "font-extrabold border-gray-600 border-b-2" : 
                                    "border-gray-300 text-gray-500 hover:bg-gray-200 hover:text-gray-700"}
                                `}
                            >{cat}</button>
                        ))
                    }
            </nav>
            <div className="w-full max-w-[1440px] mx-auto  grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 px-4">
                    {/* best list */}
                    {
                        filterToShow.map(({name, num, subtitle1, subtitle2, img, title01, title02, title03, title04, text01, text02,text03,text04, options, price},idx)=>(
                            <article key={idx} className="border rounded-xl  overflow-hidden px-8 py-8 text-left min-w-sm">
                                <div>
                                    <div className="flex justify-between">
                                        <p className="font-semibold  md:text-3xl text-2xl text-gray-600">{name}</p>
                                        <span className="w-16 h-6 bg-black text-white rounded-xl text-sm leading-6 font-bold text-center">{num}</span>
                                    </div>
                                    <div className="flex gap-5 py-4">
                                        <span className="text-gray-500 text-sm">{subtitle1}</span>
                                        <span className="text-gray-400 text-sm">{subtitle2}</span>
                                    </div>
                                    <img src={img} alt={name} className="w-full object-cover py-10" />                                    
                                </div>
                                <div className="p-4">
                                    <ul className="flex flex-col gap-4 text-sm mb:text-lg h-full">
                                        <li className="flex justify-between" >
                                            <span className="font-bold text-gray-800">{title01}</span>
                                            <span className="text-gray-400">{text01}</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="font-bold text-gray-800">{title02}</span>
                                            <span className="text-gray-400">{text02}</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="font-bold text-gray-800">{title03}</span>
                                            <span className="text-gray-400">{text03}</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="font-bold text-gray-800">{title04}</span>
                                            <span className="text-gray-400">{text04}</span>
                                        </li>
                                        <li className="flex justify-between border-1 border-b pb-8 h-20">
                                            <span className="font-bold text-gray-800">옵션</span>
                                            <span className="text-right text-gray-400">
                                                <p>{options.option1}</p>
                                                <p>{options.option2}</p>
                                                <p>{options.option3}</p>
                                            </span>   
                                        </li>
                                        <li className="text-right">
                                            <p className="text-3xl font-medium">{price}<span className="text-sm">원</span></p>
                                        </li>
                                        <li className="flex gap-4 justify-between gap-5">
                                            <button className='w-1/2 px-8 py-4 bg-white text-gray-800 text-xs border-[1px] border-gray-300 btn-basic'>자세히보기</button>
                                            <button className='w-1/2 px-8 py-4 bg-gray-800 text-white text-xs transition hover:bg-gray-900 btn-primary'>견적내기</button>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        ))
                    }                    
                </div>                
        </div>
        <div className="text-center text-gray-500 p-8 text-sm mb-20">※ 차량의 출시일 기준이며 차량별 사양 구성은 최다 판매 기준입니다.</div>
    </div>
)
}  
export default BestKia;