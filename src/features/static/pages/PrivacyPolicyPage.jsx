import React from "react";
import { PRIVACY_SECTIONS } from "../../../constants/textConstants"; // Corrected path
import PrivacySection from "../components/PrivacySection"; // Corrected path

const PrivacyPolicyPage = () => { // Renamed component to PascalCase
  return (
    <section className="bg-ceyora-sand text-ceyora-charcoal py-20 px-6 md:px-10 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        {PRIVACY_SECTIONS.map(({ heading, content }, index) => (
          <PrivacySection key={index} heading={heading} content={content} />
        ))}

        <p className="text-sm text-ceyora-charcoal/60 text-center mt-10">
          Last updated: May 1, 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
