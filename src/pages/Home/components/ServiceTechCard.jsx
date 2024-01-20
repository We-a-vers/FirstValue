import PropTypes from 'prop-types';

const ServiceTechCard = ({ image, title, description }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center w-[304px] h-full p-[30px] gap-2 tablet:gap-5 desktop:gap-10bg-white shadow-service-tech-card-border rounded-[10px] border border-solid border-service-tech-card-border-color tablet:w-[334px] desktop:w-[550px] desktop:p-[40px] ">
      <div className="rounded-lg">
        <img
          className="object-cover rounded-lg"
          src={image}
          alt="service tech image"
        ></img>
      </div>
      <div className="flex flex-col gap-2 desktop:gap-3 ">
        <div className="font-chi-sans text-sm font-medium text-foundation-blue-normal leading-[110%] tablet:text-lg desktop:text-3xl">
          {title}
        </div>
        <div className="font-chi-sans text-xs font-normal text-foundation-blue-dark leading-none tablet:w-[280px] desktop:w-[500px] tablet:text-sm desktop:text-xl">
          {description}
        </div>
      </div>
    </div>
  );
};

ServiceTechCard.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceTechCard;
