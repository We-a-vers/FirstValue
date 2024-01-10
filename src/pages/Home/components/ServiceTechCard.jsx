import PropTypes from 'prop-types';

const ServiceTechCard = ({ image, title, description }) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-[19rem] h-auto gap-[1.875rem] max-tablet:p-[1.875rem] max-tablet:bg-natural-color-white max-tablet:shadow-service-tech-card-border max-tablet:rounded-[0.625rem] max-tablet:border max-tablet:border-solid max-tablet:border-service-tech-card-border-color
                    tablet:gap-[0.75rem] tablet:items-start
                    desktop:gap-[2.1875rem] desktop:w-[34.375rem] desktop:shrink-0"
    >
      <div>
        <img
          className="flex flex-column items-start shrink-0 w-[15.25rem] h-[9.3125rem] rounded-lg
                    tablet:w-[19rem] tablet:h-[10.3rem]
                    desktop:w-[34.375rem] desktop:h-[18.75rem]"
          src={image}
          alt="service tech image"
        ></img>
      </div>
      <div
        className="flex flex-col items-start gap-[0.5rem] 
      tablet:gap-[0.7rem] tablet:pb-[1.02rem] tablet:shrink-0 tablet:self-stretch "
      >
        <div
          /* Font changes? */
          className="font-chi-sans text-[0.875rem] not-italic font-medium text-foundation-blue-normal leading-[110%]
                        tablet:font-chi-serif tablet:text-[1.125rem] tablet:font-normal tablet:text-cool-grey-90 tablet:self-stretch
                        desktop:font-chi-sans desktop:text-[2rem] desktop:font-medium desktop:text-foundation-blue-normal"
        >
          {title}
        </div>
        <div
          className="self-stretch font-chi-sans text-[0.6875rem] not-italic font-normal text-cool-grey-90 leading-[140%]
                        tablet:text-[0.75rem] tablet:max-desktop:w-[19.75rem] 
                        desktop:text-[1.25rem]"
        >
          {description}
        </div>
      </div>
      {/* The div under is a placeholder for the implementation of scrolling balls */}
      <div id="three-dots" className="flex items-start tablet:hidden">
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
