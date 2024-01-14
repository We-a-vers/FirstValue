import ValueImg from '../../assets/home/value.svg';
import IdeaImg from '../../assets/home/idea.svg';
import DealImg from '../../assets/home/deal.svg';
import ValueCard from './components/ValueCard.jsx';
import ServiceTechCard from './components/ServiceTechCard';
import ServiceTechImg from '../../assets/home/placeholder.png';

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
  return (
    <div>
      <div className="flex flex-col py-4 desktop:py-20">
        <div className="text-foundation-blue-normal text-2xl tablet:text-3xl desktop:text-5xl tablet:text-center font-semibold font-chi-serif">
          核心價值
        </div>
        <div className="flex flex-col gap-10 tablet:gap-5 tablet:flex-row py-5 tablet:py-8 desktop:py-12 items-center justify-evenly">
          {renderCards()}
        </div>
      </div>
      <div className="flex flex-col py-4 gap-3 desktop:gap-[32px] pb-[46px] desktop:py-20 desktop:px-[60px]">
        <div className="text-foundation-blue-normal text-2xl tablet:text-3xl desktop:text-5xl tablet:text-center font-semibold font-chi-serif">
          技術＆服務
        </div>
        <div className="flex text-zinc-800 text-[13px] tablet:text-lg desktop:text-2xl font-normal font-chi-serif leading-[25px]">
          鴻日興科技主要是做開發面板/LED/半導體測試治具及UV固化點膠應用開發及日本加工技術的塗布/Clean
          Roller,跟代理國外設備, 以滿足客戶的製程需求,
          同時也努力將技術做現地化以利長久的技術運作。
        </div>
      </div>
      <div className="flex flex-row justify-between gap-[30px] tablet:justify-around overflow-x-auto tablet:overflow-x-hidden tablet:gap-[46px] ">
        {renderServiceTechCards()}
      </div>
      <div className="flex flex-row justify-center pt-[60px]">
        <div className="flex justify-center items-center w-[100px] tablet:w-[135px] desktop:w-[230px] h-[30px] tablet:h-[40px] desktop:h-[58px] bg-white rounded-[20px] border border-sky-900 pb-px">
          <div className="text-center text-sky-900 text-xs tablet:text-lg desktop:2xl font-normal font-chi-serif leading-3">
            瞭解更多
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
