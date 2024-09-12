import React from "react";
import hero from "../assets/images/hero.jpg";
import Button from "../components/Button";
import Navbar from "../components/Home/Navbar";

const Home = () => {
  return (
    <>
      <section className="background">
        <Navbar />
        <div className="py-6 ">
          <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <h1 className="max-w-2xl mx-auto mb-5 text-3xl font-semibold leading-10 text-center text-gray-800 md:text-5xl dark:text-slate-200 ">
              Simplify Your Company's Stock Management with Powerful Analytics
              and Visuals
            </h1>
            <p className="max-w-sm mx-auto text-base font-normal leading-7 text-center text-gray-500 dark:text-gray-300 mb-9">
              Effortlessly manage your company's inventory and track stock
              levels with real-time insights, detailed reports, and intuitive
              visualizations.
            </p>

            <div className="mb-12 lg:mb-16">
              <Button type="primary" to="/register">
                Create your account
              </Button>
            </div>

            <div className="max-w-5xl mx-auto overflow-hidden border-2 border-gray-300 rounded-lg shadow-lg">
              <div className="flex items-center px-4 py-2 bg-gray-100">
                <div className="flex mr-4 space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <p className="font-mono text-sm text-gray-500">
                  www.quickstock.com
                </p>
              </div>
              <div className="w-full md:h-[34rem] bg-red-950 ">
                <img
                  src={hero}
                  alt="Hero Image"
                  className="object-cover w-full h-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
