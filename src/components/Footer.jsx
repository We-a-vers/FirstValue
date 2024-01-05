import useScreenSize from './hooks/useScreenSize';
import { useEffect, useState } from 'react';

const Footer = () => {
  const screenSize = useScreenSize();
  const [deviceVersion, setDeviceVersion] = useState('');

  useEffect(() => {
    if (screenSize.width < 768) {
      setDeviceVersion('mobile');
    } else {
      setDeviceVersion('notmobile');
    }
  }, [screenSize]);

  const renderFooter = () => {
    switch (deviceVersion) {
      case 'mobile':
        return (
          <>
            <div className="  text-xl text-natural-color-black font-bold font-['Inter'] ">
              鴻日興科技有限公司
            </div>
            <div className=" flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-foundation-blue-dark text-xs font-medium">
                  公司地址
                </div>
                <div className="font-chi-serif text-[#40464D] text-xs font-semibold">
                  台南市新市區豐華里中心路6號2樓
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-xs font-foundation-blue-dark font-medium">
                  電子郵件
                </div>
                <div className=" font-chi-serif text-[#40464D] text-xs font-semibold">
                  brin.huang@gmail.com
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-foundation-blue-dark text-xs font-medium">
                  聯絡電話
                </div>
                <div className="font-chi-serif text-[#40464D] text-xs font-semibold">
                  +886 906 082 606
                </div>
              </div>
            </div>

            <div className="font-chi-serif text-[9px] text-foundation-blue-dark">
              ® First Value Technology Co. All right reserved
            </div>
          </>
        );

      default:
        return (
          <div className="flex flex-row items-center justify-around px-20 py-5 desktop:py-10 ">
            <div className="flex flex-col gap-4 desktop:gap-3">
              <div className=" text-xl laptop:font-medium text-natural-color-black font-['Inter'] ">
                鴻日興科技有限公司
              </div>
              <div className="font-chi-serif text-[9px] desktop:text-xs text-foundation-blue-dark">
                ® First Value Technology Co. All right reserved
              </div>
            </div>

            <div className=" flex flex-col gap-4 desktop:gap-8 desktop:flex-row">
              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-sky-900 desktop:text-lg text-xs font-medium">
                  公司地址
                </div>
                <div className="font-chi-serif desktop:text-zinc-700 desktop:text-base text-xs font-normal">
                  台南市新市區豐華里中心路6號2樓
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-xs text-sky-900 desktop:text-lg font-medium">
                  電子郵件
                </div>
                <div className=" font-chi-serif desktop:text-zinc-700 desktop:text-base text-xs font-normal">
                  brin.huang@gmail.com
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-sky-900 desktop:text-lg text-xs font-medium">
                  聯絡電話
                </div>
                <div className="font-chi-serif desktop:text-zinc-700 desktop:text-base text-xs font-normal ">
                  +886 906 082 606
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col gap-4 py-8 px-8 border-t border-zinc-700 border-opacity-10">
      {renderFooter()}
    </div>
  );
};

export default Footer;
