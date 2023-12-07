import PropTypes from 'prop-types';

const ValueCard = ({ icon, word }) => {
  return (
    <div
      className="flex justify-center items-center w-40 h-36 rounded-xl shadow-value-card backdrop-blur-sm px-3.5 py-6
                    tablet:w-48 tablet:h-44 tablet:px-4 tablet:py-6
                    desktop:w-96 desktop:h-64 desktop:px-10 desktop:py-10"
    >
      <div
        className="flex flex-col gap-3 justify-center items-start w-36 h-32
                            tablet:flex-start tablet:gap-3.5 tablet:w-40 tbablet:h-36
                            desktop:gap-4 desktop:w-auto desktop:h-auto"
      >
        <div
          className=" w-8 h-8
                            tablet:w-10 tablet:h-10
                            desktop:w-valueImgSizeDesk desktop:h-valueImgSizeDesk"
        >
          <img src={icon} alt="value icon"></img>
        </div>
        <div
          className=" font-chi-sans text-[0.6875rem] not-italic font-normal leading-4
                            tablet:text-xs
                            desktop:text-xl desktop:leading-6"
        >
          {word}
        </div>
      </div>
    </div>
  );
};

ValueCard.propTypes = {
  icon: PropTypes.any.isRequired,
  word: PropTypes.string.isRequired,
};

export default ValueCard;
