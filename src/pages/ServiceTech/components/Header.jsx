function Header() {
  return (
    <div className=" bg-gray-5 py-16 max-w-full">
      <div className="flex flex-col gap-4">
        <div className="text-sky-950 text-xs font-normal font-['Inter']">
          技術&服務
        </div>
        <div className="lg:text-4xl bg-main-gradient inline-block text-transparent bg-clip-text font-medium font-['Noto Sans TC'] text-[28px] ">
          先進的技術，穩定的品質
        </div>

        <div className=" text-zinc-800 text-xs font-normal font-['Noto Sans TC'] leading-5 text-left">
          鴻日興科技主要是做開發面板/LED/半導體測試治具及UV固化點膠應用開發及日本加工技術的塗布/Clean
          Roller,跟代理國外設備, 以滿足客戶的製程需求,
          同時也努力將技術做現地化以利長久的技術運作。
        </div>
      </div>
    </div>
  );
}

export default Header;
