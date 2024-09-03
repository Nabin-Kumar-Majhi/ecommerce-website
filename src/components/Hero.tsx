import { FC } from "react";

const Hero: FC = () => {
  return (
    <div id="hero" className="relative h-96 bg-gray-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Tharu Online Store
          </h1>
          <p className="text-xl text-white">Discover our amazing products</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
