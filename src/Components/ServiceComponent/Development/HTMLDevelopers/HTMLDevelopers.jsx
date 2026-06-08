import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BannerComponent from '../../CommonComponents/BannerComponent'
import BottomComponents from '../../CommonComponents/BottomComponents'
const HTMLDevelopers = () => {
    return (
        <>
            <Intro
                title="HTML, CSS, JS Developers"
                desc="Content is king, and we’re here to help you rule. Our HTML, CSS, JS Developers are designed to create Websites and CRMs that establish your brand as a thought leader in your industry."
                defaultService="Development"
                defaultBudget="1L - 3L"
            />
            <BannerComponent />
            <BottomComponents />
        </>
    )
}

export default HTMLDevelopers