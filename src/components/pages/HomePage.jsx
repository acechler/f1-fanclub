import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero";

const OtherSide = () => {
  return (
    <div className="m-auto">
 {/*   Next Component  */}

 <section className="bg-gray-50">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Having the best time possible
              </h2>

              <p className="hidden text-gray-500 sm:mt-4 sm:block">
                Over the years, I have enjoyed go-kart racing. I worked at a track and got to run many races. Seeing who had the best laptime was always a thrill! I have recently developed a natural interest into Formula 1.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl">
        
            </div>
          </div>
        </section>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <Hero />
      <OtherSide />
    </div>
  );
};

export default HomePage;