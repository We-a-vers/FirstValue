import { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { TbPointFilled } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';
import useScreenSize from '../../../components/hooks/useScreenSize';
import createClient from '../../../client.js';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(createClient);

function urlFor(source) {
  return builder.image(source);
}

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeskTop, setIsDeskTop] = useState(false);
  const screenSize = useScreenSize();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (screenSize.width < 1440) {
      setIsDeskTop(false);
    } else {
      setIsDeskTop(true);
    }
  }, [screenSize]);

  useEffect(() => {
    const query = `*[_type == "service"]`;

    createClient
      .fetch(query)
      .then((data) => {
        // Assuming your service documents have a products array
        setProductsData(data[0].products);
        setProduct(data[0].products[0]);
      })
      .catch(console.error);
  }, []);

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
    setModalImage(urlFor(image).url());
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
        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={() => closeModal()}
      >
        <motion.div
          className="w-[50%] tablet:w-[60%] desktop:w-[25%] overflow-y-auto overflow-hidden rounded-lg"
          onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
        >
          <img src={image} alt="Modal" className="w-full object-cover" />
        </motion.div>
      </motion.div>
    );
  };

  const renderOptions = () => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            animate="open"
            initial="initial"
            exit="close"
            variants={menu}
            className="mt-2 w-full overflow-y-auto max-h-30 border bg-white border-gray-500 rounded-xl origin-top font-normal font-chi-sans py-5"
          >
            {productsData.map((product, index) => (
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
          </motion.nav>
        )}
      </AnimatePresence>
    );
  };

  const renderGallery = () => {
    return (
      <section className="flex flex-col gap-4 desktop:justify-between desktop:flex-row mt-5 max-h-[600px]">
        {/* Main image placeholder that spans the full width */}
        <div className="rounded-lg overflow-hidden w-full">
          <img
            src={urlFor(product.photos[0]).url()}
            alt="Selected"
            className="object-cover w-full h-full cursor-pointer"
            onClick={() => openModal(product.photos[0])}
          />
        </div>

        {/* Product placeholders */}
        <div className="w-full desktop:w-1/3 flex flex-row desktop:flex-col justify-between">
          {product.photos.slice(1).map((image, index) => {
            return (
              <div
                key={index}
                className="rounded-lg overflow-hidden w-[30%] h-12 tablet:h-24 desktop:h-[30%] desktop:w-full"
              >
                <img
                  src={urlFor(image).url()}
                  alt={`Product ${index + 1}`}
                  onClick={() => {
                    openModal(image);
                  }}
                  className="object-cover h-full w-full cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <main className="flex flex-col py-8 desktop:py-16 desktop:flex-row justify-center items-center desktop:items-start desktop:gap-[65px]">
      {/* DropDown */}

      {isModalOpen && ImageModal(modalImage)}

      {!isDeskTop ? (
        <>
          <div
            className="bg-white w-full p-3 flex items-center justify-center rounded-xl shadow border border-zinc-200 hover:cursor-pointer"
            onClick={() => setIsOpen((cur) => !cur)}
          >
            {product && (
              <span className="flex-grow text-center text-xs tablet:text-lg font-normal font-chi-sans">
                {product.name === '' ? 'Select a Product' : product.name}
              </span>
            )}

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
        <aside className="flex flex-col">
          {productsData.map((p, index) => {
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
        </aside>
      )}

      {product && (
        <article className="mt-8 w-full">
          {/* Product Title */}
          <h1 className="text-[17px] tablet:text-lg desktop:text-[27px] font-normal font-chi-sans text-foundation-blue-normal text-start">
            {product.name}
          </h1>
          {/* Product Description */}
          <p className="text-[11px] tablet:text-sm desktop:text-xl font-normal font-chi-sans text-natural-color-black text-start my-2.5">
            {product.description}
          </p>

          {renderGallery()}

          {/* Product Details */}
          {product.details && (
            <section className="bg-neutral-50 flex flex-col gap-2 w-full p-4 rounded-lg mt-5">
              <h2 className="text-sm desktop:text-lg font-medium font-chi-sans">
                詳細資訊
              </h2>
              {product.details.map((detail, index) => {
                return (
                  <p
                    className="flex flex-row items-center gap-1 text-[11px] tablet:text-xs desktop:text-lg font-normal font-chi-sans text-natural-color-black"
                    key={index}
                  >
                    <TbPointFilled size={10} />
                    {detail}
                  </p>
                );
              })}
            </section>
          )}
        </article>
      )}
    </main>
  );
};

export default Product;
