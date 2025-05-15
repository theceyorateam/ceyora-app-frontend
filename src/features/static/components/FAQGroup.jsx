import FAQItem from "./FAQItem";

const FAQGroup = ({ group, groupIdx, openIndex, onToggle }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold mb-4 text-ceyora-teal">{group.category}</h3>
    <ul className="space-y-4">
      {group.items.map((faq, idx) => {
        const index = `${groupIdx}-${idx}`;
        return (
          <FAQItem
            key={index}
            index={index}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => onToggle(index)}
          />
        );
      })}
    </ul>
  </div>
);

export default FAQGroup;
