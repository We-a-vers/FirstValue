import PropTypes from 'prop-types';

const ValueCard = ({ icon, word }) => {
  return (
    <div className="flex flex-col min-h-48 justify-evenly tablet:max-w-[300px] tablet:h-[181.99px] desktop:max-w-[380px] desktop:h-[260px] py-6 tablet:py-6 px-4 tablet:px-4 gap-3 bg-white rounded-lg">
      <div>
        <img src={icon} alt="value icon"></img>
      </div>
      <div className="font-chi-sans tablet:text-xs self-center desktop:text-2xl text-justify font-normal text-black">
        {word}
      </div>
    </div>
  );
};

ValueCard.propTypes = {
  icon: PropTypes.any.isRequired,
  word: PropTypes.string.isRequired,
};

export default ValueCard;
