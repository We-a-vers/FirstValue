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
          <div className="flex flex-col gap-4">
            <div className="text-xl text-natural-color-black font-bold font-chi-sans">
              鴻日興科技有限公司
            </div>
            <div className=" flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-foundation-blue-normal text-xs font-medium">
                  公司地址
                </div>
                <div className="font-chi-serif text-[#40464D] text-xs font-semibold">
                  台南市新市區豐華里中心路6號2樓
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-xs text-foundation-blue-normal font-medium">
                  電子郵件
                </div>
                <div className=" font-chi-serif text-[#40464D] text-xs font-semibold">
                  brin.huang@gmail.com
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-foundation-blue-normal text-xs font-medium">
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
          </div>
        );

      default:
        return (
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-4 desktop:gap-3 text-foundation-blue-dark">
              <div className="text-xl font-medium font-chi-sans">
                鴻日興科技有限公司
              </div>
              <div className="font-chi-serif text-[9px] desktop:text-xs">
                ® First Value Technology Co. All right reserved
              </div>
            </div>

            <div className=" flex flex-col gap-4 desktop:gap-10 desktop:flex-row">
              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-foundation-blue-normal desktop:text-lg text-xs font-medium">
                  公司地址
                </div>
                <div className="font-chi-serif text-zinc-700 desktop:text-base text-xs font-normal">
                  台南市新市區豐華里中心路6號2樓
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-xs text-foundation-blue-normal desktop:text-lg font-medium">
                  電子郵件
                </div>
                <div className=" font-chi-serif text-zinc-700 desktop:text-base text-xs font-normal">
                  brin.huang@gmail.com
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-chi-sans text-foundation-blue-normal desktop:text-lg text-xs font-medium">
                  聯絡電話
                </div>
                <div className="font-chi-serif text-zinc-700 desktop:text-base text-xs font-normal ">
                  +886 906 082 606
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <footer className="bg-[#F6F8F9] flex flex-col p-9 tablet:py-10 tablet:px-32 desktop:py-[65px] desktop:px-[116px] border-t border-zinc-700 border-opacity-10">
      {renderFooter()}
    </footer>
  );
};

export default Footer;
