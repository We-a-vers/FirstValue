function Header() {
  return (
    <div className="flex flex-col gap-2 tablet:gap-5 py-16 tablet:py-20 desktop:py-36">
      <div className="text-foundation-blue-normal text-sm tablet:text-lg desktop:text-2xl font-normal font-chi-serif">
        技術&服務
      </div>
      <div className="text-[28px] tablet:text-[38px] desktop:text-[64px] bg-main-gradient text-transparent bg-clip-text font-medium font-chi-sans">
        先進的技術，穩定的品質
      </div>

      <div className="text-natural-color-black text-xs tablet:text-sm desktop:text-2xl font-normal font-chi-sans leading-normal text-justify">
        鴻日興科技主要是做開發面板/LED/半導體測試治具及UV固化點膠應用開發及日本加工技術的塗布/Clean
        Roller,跟代理國外設備, 以滿足客戶的製程需求,
        同時也努力將技術做現地化以利長久的技術運作。
      </div>
    </div>
  );
}

export default Header;
