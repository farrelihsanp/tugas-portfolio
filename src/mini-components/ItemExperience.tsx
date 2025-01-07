import { useState } from "react";

const ItemExperience = (props: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <div className="flex items-center mb-4">
        <span className="text-blue-600 text-3xl">{props.icon}</span>
        <h2 className="text-xl font-semibold ml-2 text-gray-800">
          {props.company}
        </h2>
      </div>
      <p className="font-semibold text-gray-700">{props.title}</p>
      <p className="font-semibold text-gray-500">{props.date}</p>
      <p className="text-gray-600 mt-2">{props.description}</p>

      {isExpanded && (
        <>
          <h2 className="font-semibold mt-4 text-gray-800">Jobdesk:</h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-600">{props.jobdesk1}</li>
            <li className="text-gray-600">{props.jobdesk2}</li>
            <li className="text-gray-600">{props.jobdesk3}</li>
            <li className="text-gray-600">{props.jobdesk4}</li>
          </ul>
        </>
      )}
      <button
        onClick={toggleReadMore}
        className="text-blue-500 hover:underline focus:outline-none mt-4 transition-colors duration-200"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ItemExperience;
