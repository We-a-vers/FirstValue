import Product from './components/product';
import Header from './components/Header';
Header;

const ServiceTech = () => {
  return (
    <div>
      <header className="relative bg-[url('/service_background.png')] bg-cover bg-no-repeat bg-center px-[36px] tablet:px-[72px] desktop:px-[135px]">
        <div className="absolute inset-0 bg-white bg-opacity-70" />
        <div className="relative z-10">
          <Header />
        </div>
      </header>
      <div className="px-[36px] tablet:px-[72px] desktop:px-[135px]">
        <Product />
      </div>
    </div>
  );
};

export default ServiceTech;
