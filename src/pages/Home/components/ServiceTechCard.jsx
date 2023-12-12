import PropTypes from 'prop-types';

const ServiceTechCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[19rem] h-auto p-[1.875rem] gap-[1.875rem] bg-natural-color-white shadow-service-tech-card-border rounded-[0.625rem] border border-solid border-service-tech-card-border-color">
      <div>
        <img
          className="flex flex-column items-start shrink-0 w-[15.25rem] h-[9.3125rem] rounded-lg"
          src={image}
          alt="service tech image"
        ></img>
      </div>
      <div className="flex flex-col items-start gap-[0.5rem]">
        <div className="font-chi-sans text-[0.875rem] not-italic font-medium text-foundation-blue-normal leading-[110%]">
          {title}
        </div>
        <div className="self-stretch font-chi-sans text-[0.6875rem] not-italic font-normal text-cool-grey-90 leading-[140%]">
          {description}
        </div>
      </div>
      {/* The div under is a placeholder for the implementation of scrolling balls */}
      <div id="three-dots" className="flex items-start">
        Scroll Balls
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
