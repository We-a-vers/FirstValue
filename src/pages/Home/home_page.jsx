import ValueImg from './HomeComponents/HomeAssets/value.svg';
import IdeaImg from './HomeComponents/HomeAssets/idea.svg';
import DealImg from './HomeComponents/HomeAssets/deal.svg';
import ValueCard from "./HomeComponents/ValueCard.jsx";

const data = [
    {
        icon: ValueImg,
        description: '我們以思考如何創造價值給予客戶的出發點來努力達成從材料'
    },
    {
        icon: IdeaImg,
        description: '設計零件，治具，自動化設備, 並與在世界潛在的設備製造商技術合作，為客戶思考優異的主意,良好的創新解決方案'
    },
    {
        icon: DealImg,
        description: '我們願意以勇敢冒險家的精神開發出新的解決方案進入市場和產品，並且能提供信心和保證來達成彼此的承諾'
    }
]

const renderCards = () => {

    return data.map((card) => (
        <div key={card.description} className="flex flex-col px-valuePadPhone h-48
                        tablet:gap-5 tablet:px-20
                        desktop:flex-row desktop:px-valuePadDesktop" >
            <ValueCard
                Icon={card.icon}
                Word={card.description}
            />
        </div>
    ));
}

const Home = () => {
    return (
        <div>
            {renderCards()}
        </div>
    )
}

export default Home;
