import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    name: 'ITO燒結爐',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
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
  const [product, setProduct] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const menu = {
    initial: {
      scaleY: 0,
    },
    close: {
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      scaleY: 1,
      transition: {
        duration: 0.3,
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
            className="mt-2 w-[304px] overflow-y-auto max-h-30 border border-gray-500 rounded-xl origin-top"
          >
            {products.map((product) => (
              <li
                className="p-2 hover:bg-gray-300 text-center"
                key={product.name}
                onClick={() => {
                  setProduct(product.name);
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

  return (
    <div className="mt-8 flex flex-col justify-center items-center text-xs font-normal font-chi-sans">
      <div className="bg-white w-[304px] p-3 flex items-center justify-center rounded-xl shadow border border-zinc-200">
        <span className="flex-grow text-center">
          {product === '' ? 'Select a Product' : product}
        </span>
        <FaAngleDown
          className="hover:cursor-pointer"
          size={20}
          onClick={() => setIsOpen((cur) => !cur)}
        />
      </div>
      {renderOptions()}
    </div>
  );
};

export default Product;
