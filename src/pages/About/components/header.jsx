function Header() {
    return (
      <>
        {headerBlock}
      </>
    );
  }
  
  function headerBlock() {
      <>
        <div className="w-[360px] h-[230px] pl-[30px] pr-[90px] py-[53px] bg-gray-50 justify-start items-center inline-flex">
          <div className="w-60 self-stretch relative">
            {titlesBlock}
            {headerDescription}
          </div>
        </div>
      </>
  }
  
  function aboutUsTitle() {
    return (
      <div className="text-sky-950 text-xs font-normal font-['Inter']">
        關於我們
      </div>
    );
  }
  
  function fvtTitleBlock() {
    return (
      <div className="self-stretch flex-col justify-start items-start gap-2 flex">
        {fvtTitle}
      </div>
    );
  }
  
  function titlesBlock() {
      return (
          <>
          {aboutUsTitle}
          {fvtTitleBlock}
          </>
      );
  }
  
  function fvtTitle() {
    return (
      <div className="text-blue-950 text-[28px] font-medium font-['Noto Sans TC']">
        鴻日興科技
      </div>
    );
  }
  
  function headerDescription() {
    return (
      <div className="w-60 left-0 top-[84px] absolute text-zinc-800 text-xs font-normal font-['Noto Sans TC'] leading-tight">
        滿足客戶的製程需求的同時，也努力將技術做現地化以利長久的技術運作。
      </div>
    );
  }
  
  export default Header;
  