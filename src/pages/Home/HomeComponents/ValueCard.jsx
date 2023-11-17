const ValueCard = ({Icon, Word}) => {
    return (
        <div className="flex w-72 h-20 gap-2.5 justify-center
                        tablet:flex-start tablet:w-valueTabletWidth
                        desktop:flex-col desktop:gap-valueGap desktop:w-valueWidth desktop:h-valueHeight">
            <div className="w-20 h-20
                            tablet:w-8 tablet:h-8
                            desktop:w-24 desktop:h-24">
                <img src={Icon} alt="value icon"></img>
            </div>
            <div className="text-sm 
                            tablet:w-valueTabletWordsWidth
                            desktop:text-xl desktop:w-valueWidth">
                {Word}
            </div>
        </div>    
    )   
}

export default ValueCard