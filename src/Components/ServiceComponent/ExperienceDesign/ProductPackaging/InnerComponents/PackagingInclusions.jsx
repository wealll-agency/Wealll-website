import React from "react";
import "./packaging-inclusions.css";

const PackagingInclusions = () => {
  const inclusions = [
    {
      title: "Front & Back Panel Design",
      desc: "Eye-catching front visuals & logically structured back details.",
    },
    {
      title: "Side Panel Information Layout",
      desc: "Optimized space for brand story or usage instructions.",
    },
    {
      title: "Product Description Structuring",
      desc: "Persuasive and readable text placement.",
    },
    {
      title: "Ingredient / Spec Placement",
      desc: "Clear and compliant detailing for consumers.",
    },
    {
      title: "Barcode Placement",
      desc: "Scannable and non-intrusive positioning.",
    },
    {
      title: "Legal & Compliance Layout",
      desc: "Adhering to packaging standards where required.",
    },
    {
      title: "Print-Ready Files",
      desc: "CMYK, High Resolution deliverables ready for vendors.",
    },
    {
      title: "3D Mockup Previews",
      desc: "Lifelike visualization of the final product.",
    },
    {
      title: "Multi-Size Adaptation",
      desc: "Scaling the design across different product sizes.",
    },
    {
      title: "Editable Source Files",
      desc: "Open files provided per your selected package.",
    },
  ];

  return (
    <section className="pkg-inclusions-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="pkg-subtitle">WHAT WE DELIVER</span>
          <h2 className="pkg-inclusions-title">
            What’s Included in Your{" "}
            <span className="highlight-text">Packaging Design</span>
          </h2>
          <p className="pkg-inclusions-desc">
            Complete & Professional Packaging Deliverables
          </p>
        </div>

        <div className="pkg-timeline">
          {inclusions.map((item, index) => (
            <div
              className={`pkg-timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
            >
              <div className="pkg-timeline-content">
                <div className="pkg-timeline-number">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pkg-delivery-badge text-center mt-5">
          <p>
            Every packaging file is delivered professionally organized and
            production-ready.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagingInclusions;
