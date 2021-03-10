import React from "react";

const ImpactCardPreference = ({
  name,
  desc,
  img,
  selected,
  setSelectedImpact,
  savable,
}) => {
  return !selected ? (
    <div
      onClick={setSelectedImpact}
      data-name={name.split(" ")[0].toLowerCase()}
      className={`group bg-dark-gray shadow-lg rounded-lg p-12 transform hover:scale-105 transition ease-in-out duration-300 hover:bg-secondary ${
        savable ? "cursor-pointer" : ""
      }`}>
      <img className='w-36 mx-auto' src={`/images/${img}`} alt='City' />
      <h2 className='text-primary group-hover:text-white text-2xl font-bold text-center mt-4'>
        {name}
      </h2>
      <p className='text-sm text-center leading-5 text-gray-500 dark:text-white group-hover:text-white mt-2'>
        {desc}
      </p>
    </div>
  ) : (
    <div
      data-name={name.split(" ")[0].toLowerCase()}
      className={`group bg-secondary shadow-lg rounded-lg p-12 ${
        savable ? "cursor-pointer" : ""
      }`}>
      <img className='w-36 mx-auto' src={`/images/${img}`} alt='City' />
      <h2 className='text-white text-2xl font-bold text-center mt-4'>{name}</h2>
      <p className='text-sm text-center leading-5 text-white mt-2'>{desc}</p>
    </div>
  );
};

export default ImpactCardPreference;
