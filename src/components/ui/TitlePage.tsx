interface TitlePageProps {
  text: string;
  pageName: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ text, pageName }) => {
  return (
    <div>
      <h1 className="text-6xl text-[#BDBDBD] font-light uppercase max-md:text-4xl">
        {pageName}
      </h1>
      <h1 className="font-bold text-6xl max-md:text-4xl">{text}</h1>
    </div>
  );
};

export default TitlePage;
