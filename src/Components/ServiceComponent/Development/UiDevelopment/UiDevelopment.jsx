import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BannerComponent from '../../CommonComponents/BannerComponent'
import BottomComponents from '../../CommonComponents/BottomComponents'
const UiDevelopment = () => {
    return (
        <>
            <Intro
                title="UI/UX for Applications, Websites and CRMs"
                desc="Content is king, and we’re here to help you rule. Our UI/UX for Applications are designed to create Websites and CRMs that establish your brand as a thought leader in your industry."
                defaultService="Development"
                defaultBudget="1L - 3L"
            />
            <BannerComponent />
            <BottomComponents />
        </>
    )
}

export default UiDevelopment