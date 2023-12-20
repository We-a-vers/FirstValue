import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

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

  const renderOptions = () => {
    return (
      <div>
        <ul className="mt-2 w-[304px] overflow-y-auto max-h-30 border border-gray-500 rounded-xl">
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
        </ul>
      </div>
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
      {isOpen && renderOptions()}
    </div>
  );
};

export default Product;
