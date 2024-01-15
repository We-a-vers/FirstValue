const Home = () => {
    return (
        <div className="flex flex-col gap-2 px-[50px] tablet:px-[70px] desktop:px-[109px] py-[53px] tablet:py-[73px] desktop:py-[121px] bg-gray-50 text-left items-center">
            <div className="">
                <div className="text-[28px] text-center desktop:text-[64px] font-bold font-['Inter'] 
                    bg-gradient-to-l from-blue-950 to-blue-300 bg-clip-text text-transparent">
                    價值  創新  承諾
                </div>
                <div className="text-black text-center text-sm tablet:text-base desktop:text-[32px] font-bold font-['Noto Sans TC']
                mt-3 text-shadow-lg desktop:mt-6 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                    經驗的累積是為了追求完美 知識的累積是為了追求創新
                </div>
                <div className="text-black text-center text-xs tablet:text-base desktop:text-[28px] font-medium font-['Noto Sans TC'] mt-3 desktop:mt-6">
                    我們是擁有半導體、平板顯示器、藍寶石和矽晶片微加工經驗的ODM＆OEM廠。我們的團隊專注於設計零件、治具、自動化設備，並與全球領先的設備製造商合作，提供技術解決方案
                </div>
            </div>
            <div className="space-y-10 flex flex-row justify-between">
                <button class="bg-normal w-full text-white font-bold mt-3 rounded-2xl text-center solid py-2 px-4 rounded-full gap-y-3">
                    關於我們
                </button>
            </div>
        </div>
    );
};

export default Home;