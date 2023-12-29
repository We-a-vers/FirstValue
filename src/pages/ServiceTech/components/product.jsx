import { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { TbPointFilled } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';
import useScreenSize from '../../../components/hooks/useScreenSize';

const products = [
  {
    name: 'ITO燒結爐',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
    details: [
      '厚度：1mm~8mm',
      '寬度：從10mm~170mm',
      '長度：500mm（新技術可到1,000mm 也可長晶C軸面藍寶石)',
      '厚度公差 +/-0.02 mm',
      '尺寸公差 +/-0.05 mm',
    ],
  },
  {
    name: 'Product 2',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
  },
  {
    name: 'Product 3',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
  },
  {
    name: 'Product 4',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
  },
  {
    name: 'Product 5',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
  },
];

const Product = () => {
  const [product, setProduct] = useState({
    name: products[0].name,
    description: products[0].description,
    details: products[0].details,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isDeskTop, setIsDeskTop] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width < 1440) {
      setIsDeskTop(false);
    } else {
      setIsDeskTop(true);
    }
  }, screenSize);

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

  const renderOptions = () => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            animate="open"
            initial="initial"
            exit="close"
            variants={menu}
            className="mt-2 w-full overflow-y-auto max-h-30 border border-gray-500 rounded-xl origin-top text-xs font-normal font-chi-sans"
          >
            {products.map((product) => (
              <li
                className="p-2 hover:bg-gray-300 text-center"
                key={product.name}
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
      <div className="w-full mt-2">
        {/* Grid container */}
        <div className="grid grid-cols-3 gap-4">
          {/* Main image placeholder that spans the full width */}
          <div className="col-span-3 bg-gray-300 rounded-lg h-64 w-full"></div>

          {/* Thumbnails placeholders */}
          <div className="bg-gray-200 rounded-lg h-24 w-full"></div>
          <div className="bg-gray-200 rounded-lg h-24 w-full"></div>
          <div className="bg-gray-200 rounded-lg h-24 w-full"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8 flex flex-col desktop:flex-row justify-center items-center desktop:items-start desktop:gap-[65px]">
      <div className=""></div>
      {/* DropDown */}
      {!isDeskTop ? (
        <>
          <div
            className="bg-white w-full p-3 flex items-center justify-center rounded-xl shadow border border-zinc-200 hover:cursor-pointer"
            onClick={() => setIsOpen((cur) => !cur)}
          >
            <span className="flex-grow text-center text-xs font-normal font-chi-sans">
              {product.name === '' ? 'Select a Product' : product.name}
            </span>

            {isOpen ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
          </div>
          {renderOptions()}
        </>
      ) : (
        <div className="flex flex-col gap-5">
          {products.map((p) => {
            return (
              <div
                className={`w-[211px] h-[58px] p-5 ${
                  p.name === product.name
                    ? 'bg-foundation-blue-normal text-white'
                    : 'bg-white'
                } rounded-[20px] shadow-lg text-center cursor-pointer mt-8`}
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
        <div className="text-[17px] font-normal font-chi-sans text-foundation-blue-normal text-start">
          {product.name}
        </div>
        {/* Product Description */}
        <div className="text-[11px] font-normal font-chi-sans text-natural-color-black text-start my-2.5">
          {product.description}
        </div>

        {renderGallery()}

        {/* Product Details */}
        {product.details && (
          <div className="flex flex-col gap-2 w-full p-4 rounded-lg border-2 mt-5">
            <div className="text-sm font-medium font-chi-sans">詳細資訊</div>
            {product.details.map((detail) => {
              return (
                <div
                  className="flex flex-row items-center gap-1 text-[11px] font-normal font-chi-sans text-natural-color-black"
                  key={detail}
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
