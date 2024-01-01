import { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { TbPointFilled } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';
import useScreenSize from '../../../components/hooks/useScreenSize';
import Jig1 from '../../../assets/service/jig_1.png';
import Jig2 from '../../../assets/service/jig_2.png';
import Jig3 from '../../../assets/service/jig_3.png';
import Jig4 from '../../../assets/service/jig_4.png';
import LED1 from '../../../assets/service/LED_1.png';
import LED2 from '../../../assets/service/LED_2.png';
import LED3 from '../../../assets/service/LED_3.png';
import LED4 from '../../../assets/service/LED_4.png';
import API1 from '../../../assets/service/API_1.png';
import API2 from '../../../assets/service/API_2.png';
import API3 from '../../../assets/service/API_3.png';
import API4 from '../../../assets/service/API_4.png';
import Data1 from '../../../assets/service/data_1.png';
import Data2 from '../../../assets/service/data_2.png';
import Data3 from '../../../assets/service/data_3.png';
import Data4 from '../../../assets/service/data_4.png';
import LightBox1 from '../../../assets/service/lightbox_1.png';
import LightBox2 from '../../../assets/service/lightbox_2.png';
import LightBox3 from '../../../assets/service/lightbox_3.png';
import LightBox4 from '../../../assets/service/lightbox_4.png';
import Remodel1 from '../../../assets/service/remodel_1.png';
import Remodel2 from '../../../assets/service/remodel_2.png';
import Remodel3 from '../../../assets/service/remodel_3.png';
import Remodel4 from '../../../assets/service/remodel_4.png';
import System1 from '../../../assets/service/system_1.png';
import System2 from '../../../assets/service/system_2.png';
import System3 from '../../../assets/service/system_3.png';
import System4 from '../../../assets/service/system_4.png';
import DryIce1 from '../../../assets/service/dryice_1.png';
import DryIce2 from '../../../assets/service/dryice_2.png';
import DryIce3 from '../../../assets/service/dryice_3.png';
import DryIce4 from '../../../assets/service/dryice_4.png';

const products = [
  {
    name: '高亮度燈箱',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
    details: [
      '厚度：1mm~8mm',
      '寬度：從10mm~170mm',
      '長度：500mm（新技術可到1,000mm 也可長晶C軸面藍寶石)',
      '厚度公差 +/-0.02 mm',
      '尺寸公差 +/-0.05 mm',
    ],
    photos: [LightBox1, LightBox2, LightBox3, LightBox4],
  },
  {
    name: 'LED UV固化燈源',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
    photos: [LED1, LED2, LED3, LED4],
  },
  {
    name: '測試治具',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
    photos: [Jig1, Jig2, Jig3, Jig4],
  },
  {
    name: '自動供應系統',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
    photos: [System1, System2, System3, System4],
  },
  {
    name: '設備及機構優化改造',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
    photos: [Remodel1, Remodel2, Remodel3, Remodel4],
  },
  {
    name: 'API巡邊檢查/裂片',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
    photos: [API1, API2, API3, API4],
  },
  {
    name: '監控系統及資料統整',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
    photos: [Data1, Data2, Data3, Data4],
  },
  {
    name: '乾冰清洗',
    description:
      '這總技術有別於一般的梨型狀產品的長晶爐, 其生長過程即是多片狀, 搭配均溫的控制及自動化的提拉重量控制分析',
    photos: [DryIce1, DryIce2, DryIce3, DryIce4],
  },
];

const Product = () => {
  const [product, setProduct] = useState(products[0]);
  const [selectedPhoto, setSelectedPhoto] = useState(product.photos[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeskTop, setIsDeskTop] = useState(false);
  const screenSize = useScreenSize();

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
      <div className="w-full mt-5">
        {/* Grid container */}
        <div className="flex flex-col gap-4 desktop:flex-row">
          {/* Main image placeholder that spans the full width */}
          <img src={selectedPhoto} alt="Selected" className="w-full h-auto" />

          {/* Thumbnails placeholders */}
          <div className="w-full desktop:w-1/3 flex flex-row desktop:flex-col justify-between gap-4">
            {product.photos.map((image, index) => {
              if (image === selectedPhoto) {
                return null;
              } else
                return (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => {
                      setSelectedPhoto(image);
                    }}
                    className="w-1/4 tablet:w-3/7 desktop:w-full h-auto"
                  />
                );
            })}
          </div>
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
          {products.map((p) => {
            return (
              <div
                key={p.details}
                className={`w-[211px] h-[58px] p-5 ${
                  p.name === product.name
                    ? 'bg-foundation-blue-normal text-white'
                    : 'bg-white'
                } rounded-[20px] shadow-lg text-center cursor-pointer mt-8 font-chi-sans`}
                onClick={() => {
                  setProduct(p);
                  setSelectedPhoto(p.photos[0]);
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
            {product.details.map((detail) => {
              return (
                <div
                  className="flex flex-row items-center gap-1 text-[11px] tablet:text-xs desktop:text-lg font-normal font-chi-sans text-natural-color-black"
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
