import React, { useState } from "react";
import { FAQ_DATA } from "../../../constants/textConstants"; // Corrected path
import FAQGroup from "../components/FAQGroup"; // Corrected path

const FAQPage = () => { // Renamed component to PascalCase
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-ceyora-sand text-ceyora-charcoal py-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">Frequently Asked Questions</h2>
        <p className="text-center text-ceyora-charcoal/80 mb-10 max-w-xl mx-auto">
          Your journey starts with curiosity — we’re here to answer every step of it.
        </p>

        {FAQ_DATA.map((group, groupIdx) => (
          <FAQGroup
            key={group.category}
            group={group}
            groupIdx={groupIdx} // groupIdx is passed but not used in the original FAQGroup, might need review
            openIndex={openIndex}
            onToggle={toggleFAQ}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
