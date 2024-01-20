import { useState, useEffect } from 'react';
import createClient from '../../../client.js';

function Header() {
  const [headerInfo, setHeaderInfo] = useState({});

  useEffect(() => {
    const query = `*[_type == "service"]`;

    createClient
      .fetch(query)
      .then((data) => {
        // Assuming your service documents have a products array
        setHeaderInfo(data[0].header);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col gap-2 tablet:gap-5 py-16 tablet:py-20 desktop:py-36">
      <div className="text-foundation-blue-normal text-sm tablet:text-lg desktop:text-2xl font-normal font-chi-serif">
        技術&服務
      </div>
      <div className="text-[28px] tablet:text-[38px] desktop:text-[64px] bg-main-gradient text-transparent bg-clip-text font-medium font-chi-sans">
        {headerInfo.title}
      </div>

      <div className="text-natural-color-black text-xs tablet:text-sm desktop:text-2xl font-normal font-chi-sans leading-normal text-justify">
        {headerInfo.description}
      </div>
    </div>
  );
}

export default Header;
