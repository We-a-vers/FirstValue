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
    <main className="flex flex-col">
      <header className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
        <img
          src="/about_background.png"
          alt="home image"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#FAFAFA] to-white opacity-75" />
        <div className="relative z-10 w-full flex flex-col gap-5 px-[36px] tablet:px-[72px] desktop:px-[135px]">
          <h1 className="text-foundation-blue-normal text-xs font-normal tablet:text-lg desktop:text-2xl font-chi-serif">
            關於我們
          </h1>
          <h2 className="text-[28px] tablet:text-[38px] desktop:text-[64px] font-medium font-chi-sans text-foundation-blue-normal leading-none">
            鴻日興科技
          </h2>
          <p className="text-natural-color-black text-xs tablet:text-lg desktop:text-[28px] font-normal font-chi-sans leading-tight">
            滿足客戶的製程需求的同時，也努力將技術做現地化以利長久的技術運作。
          </p>
        </div>
      </header>

      {/* background */}
      <section className="px-[36px] tablet:px-[72px] desktop:px-[135px] flex flex-col gap-5 py-8 tablet:py-12 desktop:py-20">
        <h2 className="text-foundation-blue-normal text-xl font-m font-chi-serif tablet:text-lg desktop:text-4xl">
          企業願景
        </h2>

        <p className="text-justify text-foundation-blue-dark text-[13px] font-normal font-chi-sans leading-[18px] tracking-widest tablet:leading-[25px] desktop:leading-10 desktop:text-[22px]">
          {aboutGoal && aboutGoal.goalText}
        </p>
      </section>
      {/* history */}
      <section className="px-[36px] tablet:px-[72px] desktop:px-[135px] flex flex-col gap-5 py-16 tablet:py-12 desktop:py-20">
        <h2 className="text-foundation-blue-normal text-xl font-m font-chi-serif tablet:text-lg desktop:text-4xl">
          企業歷史
        </h2>

        <p className="text-justify text-zinc-800 text-[13px] font-normal font-chi-sans leading-[18px] tracking-widest tablet:leading-[25px] desktop:leading-10 desktop:text-[22px]">
          {historyData.historyText}
        </p>

        {historyData.timeline && (
          <div className="mt-5 tablet:mt-8 desktop:mt-10">
            <TimeLine data={historyData.timeline} />
          </div>
        )}
      </section>
    </main>
  );
};

export default About;
