const menuData = [
    {
      id: 1,
      mainMenu: '메인 메뉴 1',
      subMenus: ['서브 메뉴 1-1', '서브 메뉴 1-2', '서브 메뉴 1-3'],
    },
    {
      id: 2,
      mainMenu: '메인 메뉴 2',
      subMenus: ['서브 메뉴 2-1', '서브 메뉴 2-2', '서브 메뉴 2-3', '서브 메뉴 2-4'],
    },
    {
      id: 3,
      mainMenu: '메인 메뉴 3',
      subMenus: ['서브 메뉴 3-1', '서브 메뉴 3-2'],
    },
    {
      id: 4,
      mainMenu: '메인 메뉴 4',
      subMenus: ['서브 메뉴 4-1', '서브 메뉴 4-2', '서브 메뉴 4-3'],
    },
  ];
  const [selectedId, setSelectedId] = useState(null);
  const toggleMenu=(id)=>{
    setSelectedId(selectedId===id ? null:id);
  }


<nav style={{maxWidth:'500px',margin:'20px auto'}}>
        <ul style={{listStyle:'none',margin:0, padding:0}}>
          {
            menuData.map((main)=>(
              <li key={main.id} style={{borderBottom:'1px solid #eee'}}>
                <a href="#" onClick={(e)=>{ e.preventDefault(); toggleMenu(main.id)}} style={{display:'block',padding:'16px 20px',textDecoration:'none',color:'#333',backgroundColor:'#fff', transition:'background-color 0.2s ease', fontWeight:'bold',position:'relative'}}>{main.mainMenu}</a>
                <div style={{maxHeight: selectedId === main.id ? `${main.subMenus.length * 48}px` : '0px',overflow:'hidden',transition:'max-height 0.3s ease-in-out',backgroundColor:'#fafafa'}}>
                  <ul style={{listStyle:'none',margin:0,padding:0}}>
                      {
                        main.subMenus.map((sub,subIndex)=>(
                          <li key={subIndex}>
                              <a href="#" style={{display:'block',padding:'12px 20px',textDecoration:'none',color:'#666',fontSize:'14px'}}>{sub}</a>
                          </li>
                        ))
                      }
                  </ul>
                </div>       
              </li>
            ))
          }
        </ul>
      </nav>