import PropTypes from 'prop-types';

const ValueCard = ({ title, description }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-full h-64 w-64 desktop:w-80 desktop:h-80 p-6 shadow-lg flex items-center justify-center flex-col">
        <h3 className="text-foundation-blue-normal text-2xl tablet:text-3xl desktop:text-4xl font-semibold font-chi-serif">
          {title ? title : 'Title'}
        </h3>
        <p className="text-sm text-black mt-4 text-center font-chi-sans">
          {description}
        </p>
      </div>
    </div>
  );
};

ValueCard.propTypes = {
  title: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
};

export default ValueCard;
