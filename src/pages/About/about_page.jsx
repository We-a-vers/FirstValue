const About = () => {
  const outerFrameStyle = {};
  return (
    <div className="h-60 pl-[30px] py-[53px] bg-gray-50">
          <div className="text-sky-950 text-xs lg:text-lg font-['Inter']">關於我們</div>
          <div className="w-40 lg:w-80 text-3xl lg:text-[64px] lg:pb-7 lg:pt-6 font-medium font-['Noto Sans TC'] 
                        bg-gradient-to-l from-blue-950 to-blue-300 
                        bg-clip-text text-transparent">
            鴻日興科技
          </div>
          <div className="w-60 md:w-auto text-zinc-800 text-xs lg:text-[28px] font-normal font-['Noto Sans TC'] leading-tight lg:tracking-[2.80px] pt-5">
            滿足客戶的製程需求的同時，也努力將技術做現地化以利長久的技術運作。
          </div>
        </div>
  );
};

export default About;
