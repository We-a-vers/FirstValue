import PropTypes from 'prop-types';

const ServiceTechCard = ({ image, title, description }) => {
  return (
    <div
      className="flex flex-col grow-[1] justify-center items-center w-[304px] gap-[30px] p-[30px] 
                bg-white shadow-service-tech-card-border rounded-[0.625rem] border border-solid border-service-tech-card-border-color
                    tablet:gap-[0.75rem] tablet: w-[334px]
                    desktop:gap-[2.1875rem] desktop:shrink-0 desktop:w-[550px] desktop:p-[40px] "
    >
      <div
        className="flex items-start min-w-[244px] min-h-[149px] 
      tablet:w-[280px] desktop:w-[480px] desktop:h-[250px]"
      >
        <img
          className="flex items-start object-fill rounded-lg"
          src={image}
          alt="service tech image"
        ></img>
      </div>
      <div
        className="flex flex-col gap-[0.5rem] h-auto
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
          className="min-h-[92.375px] self-stretch object-fill font-chi-sans text-[0.6875rem] not-italic font-normal text-cool-grey-90 leading-[140%]
                        tablet:w-[280px] tablet:text-[0.75rem]
                        desktop:w-[500px] desktop:text-[1.25rem] desktop:min-h-[168px]"
        >
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
