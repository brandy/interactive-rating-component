import ImageIconStar from '@/assets/icon-star.svg';

interface Props {
  value: number;
  handleRatingClick: (rating: number) => void;
  active?: boolean;
}

const RatingButton = ({ value, handleRatingClick, active = false }: Props) => {
  let classes =
    'text-rating md:text-rating-md text-bluish-grey bg-ebony-clay hover:bg-bluish-grey hover:text-white w-[42px] h-[42px] md:w-[51px] md:h-[51px] rounded-full flex justify-center items-center';

  if (active) {
    classes =
      'text-rating md:text-rating-md text-white bg-pumpkin w-[42px] h-[42px] md:w-[51px] md:h-[51px] rounded-full flex justify-center items-center';
  }

  return (
    <>
      <button type="button" className={classes} onClick={() => handleRatingClick(value)}>
        <p>{value}</p>
      </button>
    </>
  );
};

export default RatingButton;
