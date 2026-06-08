import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import ProductDescriptionServices from "./InnerComponents/ProductDescriptionServices";
import ProductDescriptionStrategy from "./InnerComponents/ProductDescriptionStrategy";
import ProductDescriptionStyles from "./InnerComponents/ProductDescriptionStyles";
import ProductDescriptionPricing from "./InnerComponents/ProductDescriptionPricing";

const EcommerceProductDescription = () => {
  return (
    <>
      <Intro
        title="Product description"
        desc="Content is king, and we’re here to help you rule. Our ecommerce product description services are designed to create engaging, informative, and SEO-optimized content that establishes your brand as a thought leader in your industry."
        defaultService="Content Creation"
        defaultBudget="50k - 1L"
      />

      <ProductDescriptionServices />
      <ProductDescriptionStrategy />
      <ProductDescriptionStyles />
      <ProductDescriptionPricing />
      <BottomComponents />
    </>
  );
};

export default EcommerceProductDescription;
