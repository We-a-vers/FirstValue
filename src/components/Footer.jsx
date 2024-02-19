import useScreenSize from './hooks/useScreenSize';
import createClient from '../client';
import { useEffect, useState } from 'react';

const Footer = () => {
  const screenSize = useScreenSize();
  const [deviceVersion, setDeviceVersion] = useState('');
  const [footerData, setFooterData] = useState({
    address: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (screenSize.width < 768) {
      setDeviceVersion('mobile');
    } else {
      setDeviceVersion('notmobile');
    }
  }, [screenSize]);

  useEffect(() => {
    const query = `*[_type == "footer"]`;

    createClient
      .fetch(query)
      .then((data) => {
        if (data && data.length > 0) {
          setFooterData(data[0]);
        }
      })
      .catch(console.error);
  }, []);

  const renderFooter = () => {
    switch (deviceVersion) {
      case 'mobile':
        return (
          <section className="flex flex-col gap-4">
            <h2 className="text-xl text-natural-color-black font-bold font-chi-sans">
              鴻日興科技有限公司
            </h2>
            <address className="flex flex-col gap-4 not-italic">
              <div className="flex flex-col gap-2">
                <h3 className="font-chi-sans text-foundation-blue-normal text-xs font-medium">
                  公司地址
                </h3>
                <p className="font-chi-serif text-[#40464D] text-xs font-semibold">
                  {footerData && footerData.address}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-chi-sans text-xs text-foundation-blue-normal font-medium">
                  電子郵件
                </h3>
                <a
                  className="font-chi-serif text-[#40464D] text-xs font-semibold"
                  href={`mailto:${footerData && footerData.email}`}
                >
                  {footerData && footerData.email}
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-chi-sans text-foundation-blue-normal text-xs font-medium">
                  聯絡電話
                </h3>
                <a
                  className="font-chi-serif text-[#40464D] text-xs font-semibold"
                  href={`tel:${footerData && footerData.phone}`}
                >
                  {footerData && footerData.phone}
                </a>
              </div>
            </address>

            <small className="font-chi-serif text-[9px] text-foundation-blue-dark">
              ® First Value Technology Co. All right reserved
            </small>
          </section>
        );

      default:
        return (
          <section className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-4 desktop:gap-3 text-foundation-blue-dark">
              <h2 className="text-xl font-medium font-chi-sans">
                鴻日興科技有限公司
              </h2>
              <small className="font-chi-serif text-[9px] desktop:text-xs">
                ® First Value Technology Co. All right reserved
              </small>
            </div>

            <address className="flex flex-col gap-4 desktop:gap-10 desktop:flex-row not-italic">
              <div className="flex flex-col gap-2">
                <h3 className="font-chi-sans text-foundation-blue-normal desktop:text-lg text-xs font-medium">
                  公司地址
                </h3>
                <p className="font-chi-serif text-zinc-700 desktop:text-base text-xs font-normal">
                  {footerData && footerData.address}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-chi-sans text-xs text-foundation-blue-normal desktop:text-lg font-medium">
                  電子郵件
                </h3>
                <a
                  className="font-chi-serif text-zinc-700 desktop:text-base text-xs font-normal"
                  href={`mailto:${footerData && footerData.email}`}
                >
                  {footerData && footerData.email}
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-chi-sans text-foundation-blue-normal desktop:text-lg text-xs font-medium">
                  聯絡電話
                </h3>
                <a
                  className="font-chi-serif text-zinc-700 desktop:text-base text-xs font-normal"
                  href={`tel:${footerData && footerData.phone}`}
                >
                  {footerData && footerData.phone}
                </a>
              </div>
            </address>
          </section>
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
