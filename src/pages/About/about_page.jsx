import { useEffect } from 'react';
import TimeLine from './components/time_line';
import { useState } from 'react';
import createClient from '../../client.js';

const About = () => {
  const [aboutGoal, setAboutGoal] = useState('');
  const [historyData, setHistoryData] = useState({
    historyText: '',
    timeline: [],
  });

  useEffect(() => {
    const query = `*[_type == "about"]`;

    createClient
      .fetch(query)
      .then((data) => {
        if (data && data.length > 0) {
          setAboutGoal(data[0].goal);
          setHistoryData(data[0].history);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col">
      <header className="flex flex-col gap-3 tablet:gap-5 py-10 tablet:py-20 desktop:py-28">
        <div className="text-foundation-blue-normal text-xs font-normal tablet:text-lg desktop:text-2xl font-chi-serif">
          關於我們
        </div>
        <div
          className="text-[28px] tablet:text-[38px] desktop:text-[64px] font-medium font-chi-sans
                        bg-gradient-to-l from-blue-950 to-blue-300 
                        bg-clip-text text-transparent"
        >
          鴻日興科技
        </div>
        <div className="text-xs tablet:text-lg desktop:text-[28px] font-normal font-chi-sans leading-tight">
          滿足客戶的製程需求的同時，也努力將技術做現地化以利長久的技術運作。
        </div>
      </header>

      {/* background */}
      <div className="flex flex-col gap-5 py-8 tablet:py-12 desktop:py-20">
        <div className="text-foundation-blue-normal text-xl font-m font-chi-serif tablet:text-lg desktop:text-4xl">
          企業願景
        </div>

        <div className="text-justify text-foundation-blue-dark text-[13px] font-normal font-chi-sans leading-[18px] tracking-widest tablet:leading-[25px] desktop:leading-10 desktop:text-[22px]">
          {aboutGoal && aboutGoal.goalText}
        </div>
      </div>
      {/* history */}
      <div className="flex flex-col gap-5 py-16 tablet:py-12 desktop:py-20">
        <div className="text-foundation-blue-normal text-xl font-m font-chi-serif tablet:text-lg desktop:text-4xl">
          企業歷史
        </div>

        <div className="text-justify text-zinc-800 text-[13px] font-normal font-chi-sans leading-[18px] tracking-widest tablet:leading-[25px] desktop:leading-10 desktop:text-[22px]">
          {historyData.historyText}
        </div>

        {historyData.timeline && (
          <div className="mt-5 tablet:mt-8 desktop:mt-10">
            <TimeLine data={historyData.timeline} />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
