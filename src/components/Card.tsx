import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="bg-card-gradient p-[24px] pb-[32px] md:p-[32px] mb:pb-[32px] w-full max-w-[412px] rounded-[15px] md:rounded-[30px]">
      {children}
    </div>
  );
};

export default Card;
