import PropTypes from 'prop-types';

const ServiceTechCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-start h-full p-[30px] gap-2 tablet:gap-5 desktop:gap-10 w-[550px]">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          className="object-cover"
          src={image}
          alt="service tech image"
        ></img>
      </div>
      <div className="flex flex-col gap-2 desktop:gap-3 ">
        <h3 className="font-chi-sans text-sm font-medium text-foundation-blue-normal leading-[110%] tablet:text-lg desktop:text-3xl">
          {title}
        </h3>
        <p className="font-chi-sans text-xs font-normal text-foundation-blue-dark leading-none tablet:w-[280px] desktop:w-[500px] tablet:text-sm desktop:text-xl">
          {description}
        </p>
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
