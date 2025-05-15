const AboutCard = ({ title, text }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <h3 className="text-lg font-bold text-teakwood-brown mb-2">{title}</h3>
    <p className="text-ocean-mist text-sm leading-relaxed">{text}</p>
  </div>
);

export default AboutCard;
