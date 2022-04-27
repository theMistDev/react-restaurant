import React from 'react';
import Button from '../Button';

const Home = () => {
  return (
    <main className="homeHero text-white flex flex-col justify-around items-center py-16">
      <div className=" p-3 bg-gray-700/50 shadow-2xl shadow-blue-300/50">
        <h1 className="text-7xl font-bold ">Welcome to SH Foods</h1>
      </div>
      <h3 className="text-3xl">
        Order your food online and get it delivered to your door.
      </h3>

      <div className="p-3 flex flex-row justify-between w-full bg-yellow-700/50 shadow-2xl shadow-blue-300/50 items-center">
        <div>
          <p className="text-2xl font-bold">
            Check out our mouth-watering menu
          </p>
        </div>

        <div>
          <Button title="Our Menu" href='/products' />
        </div>
      </div>
    </main>
  );
};

export default Home;
