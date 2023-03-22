import { FormEvent, useState } from 'react';
import Card from '@/components/Card';
import ThankYouCard from '@/components/ThankYouCard';
import RatingButton from '@/components/RatingButton';
import ImageIconStar from '@/assets/icon-star.svg';
import ImageThankYou from '@/assets/illustration-thank-you.svg';

function App() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const ratings = [1, 2, 3, 4, 5];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (selectedRating === null) {
      alert('Please select a rating');
      return;
    }

    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="h-full bg-cinder flex justify-center items-center p-[24px]">
        <ThankYouCard>
          <img
            src={ImageThankYou}
            alt="Thank you"
            className="mx-auto w-[144px] h-[96px] md:w-[162px] md:h-[108px] mb-[24px] md:mb-[32px]"
          />

          <div className="bg-ebony-clay text-pumpkin rounded-[22.5px] inline-flex items-center justify-center py-[4px] px-[12px] md:py-[4px] md:px-[19px] text-[14px] leading-[22px] md:text-[15px] md:leading-[24px] mb-[24px] md:mb-[32px]">
            <p>
              You selected {selectedRating} out of {ratings.length}
            </p>
          </div>

          <h1 className="text-white font-bold text-[24px] leading-[30px] md:text-[28px] md:leading-[35px] mb-[10px] md:mb-[7px]">
            Thank you!
          </h1>

          <p className="text-cadet-grey text-[14px] leading-[22px] md:text-[15px] md:leading-[24px]">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t
            hesitate to get in touch!
          </p>
        </ThankYouCard>
      </div>
    );
  }

  return (
    <div className="h-full bg-cinder flex justify-center items-center p-[24px]">
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="bg-ebony-clay p-[16px] inline-flex rounded-full mb-[16px] md:mb-[30px]">
            <img src={ImageIconStar} alt="Star Logo" className="w-[13px] md:w-[16px]" />
          </div>

          <h1 className="text-white text-heading md:text-heading-md mb-[17px] md:mb-[15px]">
            How did we do?
          </h1>

          <p className="text-cadet-grey text-body md:text-body-md mb-[24px]">
            Please let us know how we did with your support request. All feedback is appreciated to
            help us improve our offering!
          </p>

          <div className="mb-[24px] md:mb-[32px] flex flex-row justify-between">
            {ratings.map((rating: number) => (
              <RatingButton
                key={rating}
                value={rating}
                active={rating === selectedRating}
                handleRatingClick={(rating: number) => setSelectedRating(rating)}
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full text-button bg-pumpkin text-white hover:bg-white hover:text-pumpkin py-[13px] px-[23px] md:text-button-md uppercase rounded-[22.5px]"
          >
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
}

export default App;
