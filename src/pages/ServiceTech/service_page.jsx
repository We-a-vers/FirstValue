import Product from './components/product';
import Header from './components/Header';

const ServiceTech = () => {
  return (
    <main>
      <header className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
        <img
          src="/service_background.png"
          alt="home image"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#FAFAFA] to-white opacity-75" />
        <div className="relative z-10 px-[36px] tablet:px-[72px] desktop:px-[135px]">
          <Header />
        </div>
      </header>
      <section className="px-[36px] tablet:px-[72px] desktop:px-[135px]">
        <Product />
      </section>
    </main>
  );
};

export default ServiceTech;
