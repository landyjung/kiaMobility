const mainContent = [
    {
        id:0,
        part:'기아 소식',
        title:'기아, ‘The 2026 K5’·‘The 2026 K8’ 출시',
        description:'기아가 브랜드 대표 세단 K5와 K8의 연식변경 모델 The 2026 K5와 The 2026 K8를 19일(목) 출시하고 본격적인 판매를 시작한다. The 2026 K5·The 2026 K8은 다양한 고객 선호 사양을 기본으로 탑재한 신규 트림 ‘베스트 셀렉션’을 운영하는 것이 특징이다.',
        src:`${process.env.PUBLIC_URL}/images/news_20250619_the_2026_k5_k8_pc.JPG`
    }
]
const subContent = [
    {
        id:1,
        part:'뉴스',
        title:'기아, ‘The 2026 K5’·‘The 2026 K8’ 출시',        
    },
    {
        id:2,
        part:'뉴스',
        title:'기아, 지오영과 PBV 활용 친환경 의약품 물류 생태계 조성을 위한 MOU 체결',        
    },
    {
        id:3,
        part:'공지',
        title:'개인정보 처리방침 변경 안내 (2025.06.02)',
    },

]

function News() {
  return (
    <div className="w-full max-w-9xl mx-auto">
        <h2 className="text-5xl font-bold my-20">News</h2>
        <div className=" max-w-[1440px] mx-auto">
            {
                mainContent.map(({part, title, description, src}, id)=>(
                    <div key={id} className="flex flex-col md:flex-row bg-slate-600 text-white">
                        <div className="flex-1 order-2 md:order-1 text-left  box-border flex flex-col justify-around gap-5 my-6">
                            <p className="font-bold pl-8">{part}</p>
                            <p className="font-extrabold text-2xl md:pb-20 pl-8">{title}</p>
                            <p className="text-sm/6 md:text-base/8  box-border pl-8 pr-8">{description}</p>
                            <button className='w-32 px-8 py-4 bg-white text-gray-700 text-xs border-2 border-gray-200 btn-basic ml-8'>자세히보기</button>
                        </div>
                        <img src={src} alt={title} className="flex-1 object-cover oder-1 md:order-2" />
                    </div>            
                )) 
            }
            <ul  className="flex flex-col md:flex-row my-10 md:my-20">
            {
                subContent.map(({part, title},id)=>(
                    
                        <li className="text-left flex-1 md:mr-14 flex flex-col items-start " key={id}>
                            <p className="text-xs md:text-base font-bold mt-4 ml-4 text-gray-400">{part}</p>
                            <p className="text-sm md:text-lg m-4  font-semibold">{title}</p>
                        </li>                    
                ))
            }
            </ul>
        </div>
        
    </div>
  )
}  
export default News;