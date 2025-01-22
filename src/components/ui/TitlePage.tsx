interface TitlePageProps {
  text1: string;
  text2: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ text1, text2 }) => {
  return (
    <div>
      <h1 className="text-6xl text-[#BDBDBD] font-light uppercase">{text2}</h1>
      <h1 className="font-bold text-6xl">{text1}</h1>
    </div>
  );
};

export default TitlePage;
