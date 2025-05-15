const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <li className="bg-white rounded-lg shadow-md p-4">
    <button
      onClick={onToggle}
      className="w-full text-left font-medium text-lg flex justify-between items-center text-ceyora-charcoal"
    >
      {faq.question}
      <span>{isOpen ? "-" : "+"}</span>
    </button>
    {isOpen && (
      <p className="mt-3 text-sm text-ceyora-charcoal/90">{faq.answer}</p>
    )}
  </li>
);

export default FAQItem;
