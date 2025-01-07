import { useState } from "react";
import { PortfolioProps } from "../types/portfolio";

const ItemPortfolio = (props: PortfolioProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-[radial-gradient(circle_300px_at_90%_100px,#C9EBFF,transparent)] flex flex-col xl:flex-row p-6 gap-6 rounded-lg shadow-lg items-center my-6 border-2 border-gray-300 max-w-full">
      {/* Image Section */}
      <div className="flex justify-center w-full sm:w-1/2 p-4">
        <img
          src={props.src}
          alt={props.alt}
          className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between">
        {/* Project Header */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={props.imgLogo}
            alt={props.altLogo}
            className="w-10 h-10 rounded-full"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
            {props.projectName}
          </h2>
        </div>

        {/* Short Brief */}
        <p className="text-gray-700 mb-4 break-words">{props.shortBrief}</p>

        {/* Project Details */}
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">
            Project Details
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Project Title:</strong> {props.projectTitle}
            </li>
            <li>
              <strong>Technologies:</strong> {props.technologies}
            </li>
          </ul>
        </div>

        {/* Expanded Project Information */}
        <div>
          {isExpanded && (
            <>
              <h2 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">
                About Project
              </h2>
              <div className="space-y-2">
                <p className="font-bold">Situation</p>
                <p className="break-words">{props.situation}</p>
                <p className="font-bold">Task</p>
                <p className="break-words">{props.task}</p>
                <p className="font-bold">Action</p>
                <p className="break-words">{props.action}</p>
                <p className="font-bold">Result</p>
                <p className="break-words">{props.result}</p>
              </div>
            </>
          )}
          <button
            onClick={toggleReadMore}
            className="mt-4 py-1 text-black rounded-md  focus:ring-blue-400 focus:ring-opacity-50 transition duration-200 px-2"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemPortfolio;
