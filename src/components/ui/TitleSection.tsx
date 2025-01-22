interface TitleSectionProps {
  children: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ children }) => {
  return <h2 className="text-6xl font-light text-[#BDBDBD]">{children}</h2>;
};

export default TitleSection;
