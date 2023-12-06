const About = () => {
  return (
    <div>
      <header className="h-60 pl-[30px] py-[53px] bg-gray-50">
        <div className="text-sky-950 text-xs desktop:text-lg font-['Inter']">
          關於我們
        </div>
        <div
          className="w-40 desktop:w-80 text-3xl desktop:text-[64px] desktop:pb-7 desktop:pt-6 font-medium font-['Noto Sans TC'] 
                        bg-gradient-to-l from-blue-950 to-blue-300 
                        bg-clip-text text-transparent"
        >
          鴻日興科技
        </div>
        <div className="w-60 tablet:w-auto text-zinc-800 text-xs desktop:text-[28px] font-normal font-['Noto Sans TC'] leading-tight desktop:tracking-[2.80px] pt-5">
          滿足客戶的製程需求的同時，也努力將技術做現地化以利長久的技術運作。
        </div>
      </header> 
    </div>
  );
};

export default About;
