// import TimeLine from './components/time_line';
// import Footer from '../../components/footer';
// const times = [
//   {
//     year: 2012,
//     description: '與美國合作銅薄膜真空蝕刻Sputter製程',
//   },
//   {
//     year: 2013,
//     description:
//       '與烏克蘭合作在中國現地化自製藍寶石長晶爐銷售及相關藍寶石材料銷售',
//   },
//   {
//     year: 2014,
//     description: '成立大陸辦事處,開發測試治具及探針應用',
//   },
//   {
//     year: 2015,
//     description: '成功開發銷售UV固化燈及高亮度檢查燈等零件維修服務',
//   },
//   {
//     year: 2017,
//     description: 'ITO靶材燒結爐 with 日本 ；3D貼合治具改善0.1mmt玻璃吸附問題',
//   },
//   {
//     year: 2018,
//     description: '開發切割精度檢查機及超高亮度面光源、MicroLed貼合治具',
//   },
// ];

const About = () => {
  return (
    <div className = "flex flex-col gap-14">
      {/* background */}
      <div className=" bg-gray-5">
        <div className="flex flex-col gap-5">
            
            <div className="text-foundation-blue-normal text-xl font-m font-chi-serif tablet:text-lg desktop:text-4xl">
                企業願景 
            </div>

            <div className="text-justify text-zinc-800 text-[13px] font-normal font-chi-sans leading-[18px] tracking-widest tablet:leading-[25px] desktop:leading-10 desktop:text-[22px]">
              No.1 is “First Value”“
              <span className="text-foundation-blue-normal">價值第一</span>
              ”是我們對公司成立時的願景，以思考如何創造價值給予客戶的出發點，來努力達成從材料/製造/服務的整個循環的最佳方案。一群半導體和平板顯示器的超過20年以上經驗做玻璃、藍寶石、矽晶片的ODM＆OEM廠微加工服務團隊。設計零件，治具，自動化設備，並與在世界潛在的設備製造商技術合作，為客戶思考優異的主意，良好的
              <span className="text-foundation-blue-normal">創新解決方案</span>
              擁抱客戶跟我們對理想的追求，打造一個專業和創意的平台，以創造價值為出發點，共同成長的長期合作關係，並努力開創一個雙贏的局面，也可以通過解決問題創新的探索，
              <span className="text-foundation-blue-normal">共同追求卓越的環境</span>
              。“價值創新”有助於傳達我們的客戶和合作夥伴之間的承諾。為了實現我們的最佳陣容的服務，我們願意以勇敢冒險家的精神開發出新的解決方案進入市場和產品。在我們在世界各地的代表都能提供信心和保證來
              <span className="text-foundation-blue-normal">達成彼此的承諾</span>
              。
            </div>
        </div>
      </div>
      {/* history */}
      <div className=" bg-gray-5">
        <div className="flex flex-col gap-5">
            
            <div className="text-foundation-blue-normal text-xl font-m font-chi-serif tablet:text-lg desktop:text-4xl">
              企業歷史
            </div>

            <div className="text-justify text-zinc-800 text-[13px] font-normal font-chi-sans leading-[18px] tracking-widest tablet:leading-[25px] desktop:leading-10 desktop:text-[22px]">
              鴻日興科技主要是做開發面板/LED/半導體測試治具及UV固化點膠應用，開發及日本加工技術的塗布/Clean Roller,跟代理國外設備，以滿足客戶的製程需求，同時也努力將技術做現地化以利長久的技術運作。
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;
