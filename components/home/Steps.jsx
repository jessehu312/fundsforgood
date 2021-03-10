import React from "react";
import StepCard from "./StepCard";

const Steps = () => {
  const stepsData = [
    {
      name: "Choose Impact Preference",
      desc:
        " The user picks the impact that they want to focus on from the list of choices.",
      img: "idea.png",
    },
    {
      name: "Scrape & Analyze",
      desc:
        "We scape articles from each company and analyze it for you using machine learning.",
      img: "scrape.png",
    },
    {
      name: "Score Metrics",
      desc:
        "We’ll recommend top performance of your preference impact category based on the score metrics.",
      img: "score-metrics.png",
    },
  ];
  return (
    <div className='bg-black pb-36'>
      <div className='max-w-screen-xl mx-auto px-8 py-8 xl:px-0'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-primary text-5xl font-bold text-center mb-16'>
            How it works?
          </h1>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-16 lg:gap-x-36'>
            {stepsData.map((el, idx) => (
              <StepCard
                iter={idx}
                key={idx}
                name={el?.name}
                desc={el?.desc}
                img={el?.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
