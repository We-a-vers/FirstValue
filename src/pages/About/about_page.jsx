const About = () => {
  return (
    <div className="flex flex-col gap-2 px-[50px] tablet:px-[70px] desktop:px-[109px] py-[53px] tablet:py-[73px] desktop:py-[121px] bg-gray-50 text-left">
      <div className="text-sky-950 text-xs tablet:text-sm desktop:text-xl font-['Inter']">關於我們</div>
      <div className="text-[28px] desktop:text-[64px] font-bold font-['Inter'] 
        bg-gradient-to-l from-blue-950 to-blue-300 bg-clip-text text-transparent">
        鴻日興科技
      </div>
      <div className="text-black text-xs tablet:text-base desktop:text-[28px] font-medium font-['Noto Sans TC'] mt-3 desktop:mt-6">
        滿足客戶的製程需求的同時，也努力將技術做現地化以利長久的技術運作。
      </div>
    </div>
  );
};

export default About;
