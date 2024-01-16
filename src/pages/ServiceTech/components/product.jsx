import { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { TbPointFilled } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';
import useScreenSize from '../../../components/hooks/useScreenSize';
import { products } from '../../../components/data/products';

const Product = () => {
  const [product, setProduct] = useState(products[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeskTop, setIsDeskTop] = useState(false);
  const screenSize = useScreenSize();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (screenSize.width < 1440) {
      setIsDeskTop(false);
    } else {
      setIsDeskTop(true);
    }
  }, [screenSize]);

  const menu = {
    initial: {
      scaleY: 0,
    },
    close: {
      scaleY: 0,
      transition: {
        duration: 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      scaleY: 1,
      transition: {
        duration: 0.15,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const openModal = (image) => {
    setIsModalOpen(true);
    setModalImage(image);
  };

  const ImageModal = (image) => {
    if (!image) return null;

    const backdropVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    const modalVariants = {
      hidden: { scale: 0.5, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 },
      },
    };

    return (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={() => closeModal()}
      >
        <motion.div
          className="w-[70%]"
          onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
        >
          <img src={image} alt="Modal" className="w-full h-auto" />
        </motion.div>
      </motion.div>
    );
  };

  const renderOptions = () => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            animate="open"
            initial="initial"
            exit="close"
            variants={menu}
            className="mt-2 w-full overflow-y-auto max-h-30 border bg-white border-gray-500 rounded-xl origin-top font-normal font-chi-sans py-5"
          >
            {products.map((product, index) => (
              <li
                className=" py-3 w-full text-center text-xs tablet:text-lg cursor-pointer hover:bg-gray-100"
                key={index}
                onClick={() => {
                  setProduct(product);
                  setIsOpen(false);
                }}
              >
                {product.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    );
  };

  const renderGallery = () => {
    return (
      <div className="flex flex-col gap-4 desktop:flex-row mt-5">
        {/* Main image placeholder that spans the full width */}
        <img
          src={product.photos[0]}
          alt="Selected"
          className="w-full h-auto"
          onClick={() => openModal(product.photos[0])}
        />

        {/* Product placeholders */}
        <div className="w-full desktop:w-1/3 flex flex-row desktop:flex-col justify-between">
          {product.photos.slice(1).map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                onClick={() => {
                  openModal(image);
                }}
                className="w-[30%] h-auto desktop:w-auto desktop:h-[30%]"
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col py-8 desktop:py-16 desktop:flex-row justify-center items-center desktop:items-start desktop:gap-[65px]">
      {/* DropDown */}

      {isModalOpen && ImageModal(modalImage)}

      {!isDeskTop ? (
        <>
          <div
            className="bg-white w-full p-3 flex items-center justify-center rounded-xl shadow border border-zinc-200 hover:cursor-pointer"
            onClick={() => setIsOpen((cur) => !cur)}
          >
            <span className="flex-grow text-center text-xs tablet:text-lg font-normal font-chi-sans">
              {product.name === '' ? 'Select a Product' : product.name}
            </span>

            {isOpen ? (
              <>
                <FaAngleUp size={20} />
              </>
            ) : (
              <>
                <FaAngleDown size={20} />
              </>
            )}
          </div>
          {renderOptions()}
        </>
      ) : (
        <div className="flex flex-col">
          {products.map((p, index) => {
            return (
              <div
                key={index}
                className={`w-[211px] h-[58px] p-5 ${
                  p.name === product.name
                    ? 'bg-foundation-blue-normal text-white'
                    : 'bg-white'
                } rounded-[20px] shadow-md text-center cursor-pointer mt-8 font-chi-sans`}
                onClick={() => {
                  setProduct(p);
                }}
              >
                {p.name}
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-8 w-full">
        {/* Product Title */}
        <div className="text-[17px] tablet:text-lg desktop:text-[27px] font-normal font-chi-sans text-foundation-blue-normal text-start">
          {product.name}
        </div>
        {/* Product Description */}
        <div className="text-[11px] tablet:text-sm desktop:text-xl font-normal font-chi-sans text-natural-color-black text-start my-2.5">
          {product.description}
        </div>

        {renderGallery()}

        {/* Product Details */}
        {product.details && (
          <div className="flex flex-col gap-2 w-full p-4 rounded-lg border-2 mt-5">
            <div className="text-sm desktop:text-lg font-medium font-chi-sans">
              詳細資訊
            </div>
            {product.details.map((detail, index) => {
              return (
                <div
                  className="flex flex-row items-center gap-1 text-[11px] tablet:text-xs desktop:text-lg font-normal font-chi-sans text-natural-color-black"
                  key={index}
                >
                  <TbPointFilled size={10} />
                  {detail}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
