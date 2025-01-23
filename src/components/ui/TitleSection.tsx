interface TitleSectionProps {
  children: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ children }) => {
  return (
    <h2 className="text-6xl font-light text-[#BDBDBD] max-md:text-4xl">
      {children}
    </h2>
  );
};

export default TitleSection;
