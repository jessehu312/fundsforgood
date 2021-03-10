import React from "react";
import ImpactCard from "../ImpactCard";

const Impact = () => {
  const impactData = [
    {
      name: "Broad",
      desc:
        "This option will help you reach your goals while investing in ETFs that meet Environmental, Social, and Governance (ESG) requirements.",
      img: "city.png",
    },
    {
      name: "Climate",
      desc:
        "With this option, you can invest in ETFs that support companies with lower carbon emissions and the funding of green projects.",
      img: "climate.png",
    },
    {
      name: "Social",
      desc:
        "This offering is based on Broad Impact and adds two funds that support minority empowerment and gender diversity.",
      img: "social.png",
    },
    {
      name: "Racial Justice",
      desc:
        "Racial Justice Funds indicators informs our corporate engagements to hold corporations accountable for implementing policies and practices aligned on racial justice.",
      img: "racial-justice.png",
    },
    {
      name: "Workplace Equity",
      desc:
        "Workplace Equity fund engage companies to increase gender and ethnic diversity throughout their organization.",
      img: "workplace-equity.png",
    },
    {
      name: "Gender Equality",
      desc:
        "Gender Equality Funds screens funds using company performance on 12 key gender equality indicators.",
      img: "gender-equality.png",
    },
  ];
  return (
    <div className='bg-black pt-24 pb-36'>
      <div className='max-w-screen-xl mx-auto px-8 py-8 xl:px-0'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-primary text-5xl font-bold text-center mb-16'>
            Choose Your Impact
          </h1>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-16 lg:gap-x-36'>
            {impactData.map((el, idx) => (
              <ImpactCard
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

export default Impact;
