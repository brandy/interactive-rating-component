import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ThankYouCard = ({ children }: Props) => {
  return (
    <div className="bg-card-gradient p-[34px] pb-[37px] md:p-[45px] w-full max-w-[412px] rounded-[15px] md:rounded-[30px] text-center">
      {children}
    </div>
  );
};

export default ThankYouCard;
