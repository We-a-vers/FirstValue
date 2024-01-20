import Product from './components/product';
import Header from './components/Header';
Header;

const ServiceTech = () => {
  return (
    <div>
      <header className="bg-[url('/service_background.png')] bg-cover bg-no-repeat bg-center px-[36px] tablet:px-[72px] desktop:px-[135px]">
        <Header />
      </header>
      <div className="px-[36px] tablet:px-[72px] desktop:px-[135px]">
        <Product />
      </div>
    </div>
  );
};

export default ServiceTech;
