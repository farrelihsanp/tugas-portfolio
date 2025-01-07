import React from "react";

interface TabButtonProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  label: string;
  children: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  activeTab,
  setActiveTab,
  label,
  children,
}) => {
  return (
    <button
      className={`py-2 px-4 rounded hover:bg-blue-600 duration-300 hover:text-white ${
        activeTab === label
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700"
      }`}
      onClick={() => setActiveTab(label)}
    >
      {children}
    </button>
  );
};

export default TabButton;
