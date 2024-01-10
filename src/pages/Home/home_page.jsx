import ValueImg from '../../assets/home/value.svg';
import IdeaImg from '../../assets/home/idea.svg';
import DealImg from '../../assets/home/deal.svg';
import ValueCard from './components/ValueCard.jsx';
import ServiceTechCard from './components/ServiceTechCard';
import ServiceTechImg from '../../assets/home/placeholder.png';
import Footer from '../../components/footer';

const valuedata = [
  {
    icon: ValueImg,
    description:
      '我們以思考如何創造價值給予客戶的出發點來努力達成從材料/製造/服務的整個循環的最佳方案',
  },
  {
    icon: IdeaImg,
    description:
      '設計零件，治具，自動化設備, 並與在世界潛在的設備製造商技術合作，為客戶思考優異的主意,良好的創新解決方案',
  },
  {
    icon: DealImg,
    description:
      '我們願意以勇敢冒險家的精神開發出新的解決方案進入市場和產品，並且能提供信心和保證來達成彼此的承諾',
  },
];

const servicetechdata = [
  {
    image: ServiceTechImg,
    title: 'ITO燒結爐',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析...',
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
      <div
        className="flex justify-between items-start w-80 h-52 shrink-0 mr-3
                          tablet:gap-5
                          desktop:w-[77.5rem] desktop:h-[16.25rem] desktop:flex-row"
      >
        {renderCards()}
      </div>
      <div>{renderServiceTechCards()}</div>
      <Footer />
    </div>
  );
};

export default Home;
