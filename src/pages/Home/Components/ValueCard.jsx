import React from 'react'
import ReactDOM from 'react-dom'
import ValueIcon from './HomeAssets/Value.jsx'

// First Approach
const ValueCard = () => {
    return (
        <div className="flex w-72 gap-2.5 
                        desktop:flex-col desktop:gap-valueGap desktop:w-valueWidth desktop:h-valueHeight">
            <div className="w-9 h-9 desktop:w-24 desktop:h-24">
                <ValueIcon />
            </div>
            <div className="text-sm desktop:text-xl">
                我們以思考如何創造價值給予客戶的出發點來努力達成從材料/製造/服務的整個循環的最佳方案
            </div>
        </div>
    )   
}

export default ValueCard