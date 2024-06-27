import ValueCard from './components/ValueCard.jsx';
import ServiceTechCard from './components/ServiceTechCard';
import { NavLink } from 'react-router-dom';
import createClient from '../../client.js';
import { useEffect } from 'react';
import { useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { motion } from 'framer-motion';
import useScreenSize from '../../components/hooks/useScreenSize.jsx';

const builder = imageUrlBuilder(createClient);

function urlFor(source) {
  return builder.image(source);
}

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
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

  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenSize]);

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
    return valueCards.map((card, index) =>
      !isMobile ? (
        <motion.div
          key={index}
          className={index === 1 ? 'self-start' : 'self-end'}
          animate={{ y: index === 1 ? [0, 140, 0] : [0, -140, 0] }} // Move up and down
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'loop',
          }} // Repeat indefinitely
        >
          <ValueCard title={card.title} description={card.description} />
        </motion.div>
      ) : (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        >
          <ValueCard title={card.title} description={card.description} />
        </motion.div>
      ),
    );
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
    <main>
      <header className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
        <img
          src="/home_background.png"
          alt="home image"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#FAFAFA] to-white opacity-75" />
        <div className="relative z-10 flex flex-col desktop:gap-8 mx-5 tablet:mx-16 desktop:mx-32">
          <h1 className="text-[#19335A] text-left text-base tablet:text-xl desktop:text-5xl font-medium font-chi-sans leading-normal">
            {headerData && headerData.slogan}
          </h1>
          <h2
            style={{ whiteSpace: 'pre-line' }}
            className="text-[#19335A] text-left text-xs tablet:text-sm desktop:text-2xl font-normal font-chi-sans mt-[14px]"
          >
            {headerData && headerData.description}
          </h2>
        </div>
      </header>

      <section className="px-[36px] tablet:px-[72px] desktop:px-[135px] flex flex-col py-10 desktop:py-32">
        <h2 className="text-foundation-blue-normal text-2xl tablet:text-3xl desktop:text-5xl tablet:text-center font-semibold font-chi-serif">
          核心價值
        </h2>
        <div className="flex flex-col gap-10 tablet:gap-5 tablet:flex-row justify-evenly tablet:h-[470px] mt-12">
          {renderCards()}
        </div>
      </section>
      <section className="px-[36px] tablet:px-[72px] desktop:px-[135px] flex flex-col py-10 desktop:py-32">
        <div className="flex flex-col gap-3 desktop:gap-[32px]">
          <h2 className="text-foundation-blue-normal text-2xl tablet:text-3xl desktop:text-5xl tablet:text-center font-semibold font-chi-serif">
            技術 & 服務
          </h2>
          <p className="flex text-zinc-800 text-[13px] tablet:text-lg desktop:text-2xl font-normal tablet:text-center font-chi-serif leading-[25px]">
            {techData.description}
          </p>
        </div>
        <div className="flex flex-row mt-12 gap-[30px] desktop:justify-evenly overflow-x-auto no-scrollbar">
          {renderServiceTechCards()}
        </div>

        <NavLink
          to="/service"
          className="bg-white mx-auto text-xs tablet:text-sm desktop:text-2xl mt-5 tablet:mt-8 desktop:mt-[75px] py-2 px-[25px] tablet:px-10 desktop:px-16 desktop:py-3 border rounded-[20px] text-foundation-blue-normal border-foundation-blue-normal font-chi-sans font-medium"
        >
          瞭解更多
        </NavLink>
      </section>
    </main>
  );
};

export default Home;
