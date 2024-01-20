import ValueImg from '../../assets/home/value.svg';
import IdeaImg from '../../assets/home/idea.svg';
import DealImg from '../../assets/home/deal.svg';
import ValueCard from './components/ValueCard.jsx';
import ServiceTechCard from './components/ServiceTechCard';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { NavbarContext } from '../../components/Navbar.jsx';
import createClient from '../../client.js';
import { useEffect } from 'react';
import { useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(createClient);

function urlFor(source) {
  return builder.image(source);
}

const icons = [ValueImg, IdeaImg, DealImg];

const Home = () => {
  const [, setSelectedItem] = useContext(NavbarContext);
  const [headerData, setHeaderData] = useState({
    headerText: '',
    slogan: '',
    description: '',
  });
  const [valueCards, setValueCards] = useState([]);
  const [techData, setTechData] = useState({
    description: '',
    productCards: [],
  });

  useEffect(() => {
    const query = `*[_type == "home"]`;

    createClient
      .fetch(query)
      .then((data) => {
        if (data && data.length > 0) {
          setHeaderData(data[0].homeHeader);
          setValueCards(data[0].valueCards);
          setTechData(data[0].techServiceSection);
        }
      })
      .catch(console.error);
  }, []);

  const renderCards = () => {
    return valueCards.map((card, index) => (
      <div key={index}>
        <ValueCard icon={icons[index]} word={card.description} />
      </div>
    ));
  };

  const renderServiceTechCards = () => {
    return techData.productCards.map((product, index) => (
      <div key={index}>
        <ServiceTechCard
          image={urlFor(product.image).url()}
          title={product.title}
          description={product.description}
        />
      </div>
    ));
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center py-20 tablet:py-24 desktop:py-40 gap-2 tablet:gap-6 desktop:gap-3">
        <div className="text-[34px] tablet:text-5xl desktop:text-[80px] text-center font-normal font-chi-sans bg-gradient-to-l from-blue-950 to-blue-300 bg-clip-text text-transparent">
          {headerData && headerData.headerText}
        </div>
        <div className="text-natural-color-black text-center text-base tablet:text-xl desktop:text-4xl font-medium font-chi-sans desktop:mt-7 leading-normal">
          {headerData && headerData.slogan}
        </div>
        <div className="text-natural-color-gray text-center text-xs tablet:text-sm desktop:text-2xl font-normal font-chi-sans mt-[14px]">
          {headerData && headerData.description}
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
            技術 & 服務
          </div>
          <div className="flex text-zinc-800 text-[13px] tablet:text-lg desktop:text-2xl font-normal tablet:text-center font-chi-serif leading-[25px]">
            {techData.description}
          </div>
        </div>
        <div className="flex flex-row mt-11 gap-[30px] tablet:gap-0 tablet:justify-evenly overflow-x-auto no-scrollbar tablet:overflow-x-hidden">
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
