import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  style?: string;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <main className={`${style} max-w-[1200px] w-full py-10 space-y-20`}>
      {children}
    </main>
  );
};

export default Container;
