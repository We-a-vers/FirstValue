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
    <div className="flex flex-col gap-2 tablet:gap-5">
      <h1 className="text-foundation-blue-normal text-sm tablet:text-lg desktop:text-2xl font-normal font-chi-serif">
        技術&服務
      </h1>
      <h2 className="text-[28px] tablet:text-[38px] desktop:text-[64px] text-foundation-blue-normal font-medium font-chi-sans">
        {headerInfo.title}
      </h2>

      <p className="text-natural-color-black text-xs tablet:text-sm desktop:text-2xl font-normal font-chi-sans leading-normal text-justify">
        {headerInfo.description}
      </p>
    </div>
  );
}

export default Header;
