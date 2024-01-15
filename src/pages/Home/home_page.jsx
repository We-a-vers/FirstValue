import ValueImg from '../../assets/home/value.svg';
import IdeaImg from '../../assets/home/idea.svg';
import DealImg from '../../assets/home/deal.svg';
import ValueCard from './components/ValueCard.jsx';
import ServiceTechCard from './components/ServiceTechCard';
import ServiceTechImg from '../../assets/home/placeholder.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { NavbarContext } from '../../components/Navbar.jsx';

const valuedata = [
  {
    icon: ValueImg,
    description:
      '我們以思考如何創造價值給予客戶的出發點來努力達成從材料製造/服務的整個循環的最佳方案。',
  },
  {
    icon: IdeaImg,
    description:
      '設計零件，治具，自動化設備，並與在世界潛在的設備製造商技術合作，為客戶思考優異的主意，良好的創新解決方案。',
  },
  {
    icon: DealImg,
    description:
      '我們願意以勇敢冒險家的精神開發出新的解決方案進入市場和產品，並且能提供信心和保證來達成彼此的承諾。',
  },
];

const servicetechdata = [
  {
    image: ServiceTechImg,
    title: 'ITO燒結爐',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析...',
  },
  {
    image: ServiceTechImg,
    title: 'EFG導膜法長晶爐',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
  },
];

const renderCards = () => {
  return valuedata.map((card) => (
    <div key={card.description}>
      <ValueCard icon={card.icon} word={card.description} />
    </div>
  ));
};

const renderServiceTechCards = () => {
  return servicetechdata.map((card) => (
    <div key={card.description}>
      <ServiceTechCard
        image={card.image}
        title={card.title}
        description={card.description}
      />
    </div>
  ));
};

const Home = () => {
  const [, setSelectedItem] = useContext(NavbarContext);

  return (
    <div>
      <div className="flex flex-col justify-center items-center py-20 tablet:py-24 desktop:py-40 gap-2 tablet:gap-6 desktop:gap-3">
        <div className="text-[34px] tablet:text-5xl desktop:text-[80px] text-center font-normal font-chi-sans bg-gradient-to-l from-blue-950 to-blue-300 bg-clip-text text-transparent">
          價值 創新 承諾
        </div>
        <div className="text-natural-color-black text-center text-base tablet:text-xl desktop:text-4xl font-medium font-chi-sans desktop:mt-7 leading-normal">
          經驗的累積是為了追求完美 知識的累積是為了追求創新
        </div>
        <div className="text-natural-color-gray text-center text-xs tablet:text-sm desktop:text-2xl font-normal font-chi-sans mt-[14px]">
          我們是擁有半導體、平板顯示器、藍寶石和矽晶片微加工經驗的ODM＆OEM廠。我們的團隊專注於設計零件、治具、自動化設備，並與全球領先的設備製造商合作，提供技術解決方案
        </div>
        <NavLink
          to="About"
          className={'w-full flex justify-center'}
          onClick={() => setSelectedItem('About')}
        >
          <button className="mt-5 desktop:mt-12 bg-foundation-blue-normal rounded-[20px] text-white font-sans text-sm desktop:text-2xl font-medium py-[14px] tablet:py-3 w-full tablet:w-auto tablet:px-10 desktop:px-16">
            關於我們
          </button>
        </NavLink>
      </div>

      <div className="flex flex-col tablet:py-5 desktop:py-20">
        <div className="text-foundation-blue-normal text-2xl tablet:text-3xl desktop:text-5xl tablet:text-center font-semibold font-chi-serif">
          核心價值
        </div>
        <div className="flex flex-col gap-10 tablet:gap-5 tablet:flex-row py-5 tablet:py-8 desktop:py-12 items-center justify-evenly">
          {renderCards()}
        </div>
      </div>
      <div className="flex flex-col py-10 tablet:py-14 desktop:py-52">
        <div className="flex flex-col gap-3 desktop:gap-[32px]">
          <div className="text-foundation-blue-normal text-2xl tablet:text-3xl desktop:text-5xl tablet:text-center font-semibold font-chi-serif">
            技術＆服務
          </div>
          <div className="flex text-zinc-800 text-[13px] tablet:text-lg desktop:text-2xl font-normal tablet:text-center font-chi-serif leading-[25px]">
            鴻日興科技主要是做開發面板/LED/半導體測試治具及UV固化點膠應用開發及日本加工技術的塗布/Clean
            Roller,跟代理國外設備, 以滿足客戶的製程需求,
            同時也努力將技術做現地化以利長久的技術運作。
          </div>
        </div>
        <div className="flex flex-row mt-11 gap-[30px] tablet:justify-evenly overflow-x-auto no-scrollbar tablet:overflow-x-hidden tablet:gap-[46px] ">
          {renderServiceTechCards()}
        </div>
        <NavLink to="/service" className="flex justify-center">
          <button
            onClick={() => setSelectedItem('Service')}
            className="bg-white mx-auto text-xs tablet:text-sm desktop:text-2xl mt-5 tablet:mt-8 desktop:mt-[75px] py-2 px-[25px] tablet:px-10 desktop:px-16 desktop:py-3 border rounded-[20px] text-foundation-blue-normal border-foundation-blue-normal font-chi-sans font-medium"
          >
            瞭解更多
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
