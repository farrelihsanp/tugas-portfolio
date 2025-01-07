import { useState } from "react";
import ItemPortfolio from "../mini-components/ItemPortfolio";
import TabButton from "../mini-components/ButtonPortfolio";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("first");

  const renderContent = () => {
    switch (activeTab) {
      case "first":
        return (
          <div id="PortfolioSection">
            {/* Tokopedia */}
            <ItemPortfolio
              imgLogo="/src/assets/TOKOPEDIA-LOGO.png"
              altLogo="Tokopedia Logo"
              src="/src/assets/Tokopedia.png"
              alt="Tokopedia Logo"
              projectName="Tokopedia Website"
              shortBrief="As a full-stack web developer for the Tokopedia website redesign project, I was tasked with creating a more user-friendly platform."
              projectTitle="Redesign of Tokopedia E-commerce Website"
              technologies="HTML, CSS, JavaScript, React, Node.js, MongoDB"
              situation="In 2023, I was tasked with developing a new version of the Tokopedia website, one of Indonesia's largest e-commerce platforms. The project aimed to enhance user experience, improve site performance, and integrate new features that would cater to the growing number of online shoppers."
              task="My primary responsibility was to lead the design and development of the new website."
              action="To achieve the project goals, I began by organizing initial meetings with key stakeholders to gather their requirements."
              result="The new Tokopedia website was launched successfully and received positive feedback from both users and stakeholders."
            />
          </div>
        );
      case "second":
        return (
          <div>
            {/* Youtube */}
            <ItemPortfolio
              imgLogo="/src/assets/YOUTUBE-LOGO.png"
              altLogo="Youtube Logo"
              src="/src/assets/youtube.png"
              alt="Youtube Website"
              projectName="Youtube Website"
              shortBrief="I created a user-friendly website for YouTube fans, featuring popular videos, user accounts, and discussion forums."
              projectTitle="Redesign of Youtube Website"
              technologies="HTML, CSS, JavaScript, React, Node.js, MongoDB"
              situation="In 2023, I was tasked with creating a portfolio website for a fictional YouTube channel focused on educational content."
              task="The primary goals of the project were to design an aesthetically pleasing and functional website."
              action="To achieve these goals, I began with extensive research to understand the landscape of existing educational YouTube channels."
              result="The outcome of the project was highly successful, receiving positive feedback for its design and functionality."
            />
          </div>
        );
      case "third":
        return (
          <div>
            {/* TikTok */}
            <ItemPortfolio
              imgLogo="/src/assets/TIKTOK-LOGO.png"
              altLogo="TikTok Logo"
              src="/src/assets/tiktok.png"
              alt="TikTok Website"
              projectName="Tiktok Website"
              shortBrief="Our goal is to enhance the TikTok experience by providing valuable resources and a space for interaction among users."
              projectTitle="TikTok Clone Website Development"
              technologies="HTML, CSS, JavaScript, React, Node.js, MongoDB"
              situation="In the rapidly evolving landscape of social media, TikTok has emerged as a leading platform for short-form video content."
              task="The primary goal of this project was to develop a fully functional website that mimics the core features of TikTok."
              action="To achieve these goals, I utilized a combination of technologies."
              result="The project culminated in a fully operational TikTok clone website that successfully attracted a user base of over 500 registered users."
            />
          </div>
        );
      case "fourth":
        return (
          <div>
            {/* Facebook */}
            <ItemPortfolio
              imgLogo="/src/assets/FACEBOOK-LOGO.png"
              altLogo="Facebook Logo"
              src="/src/assets/facebook.png"
              alt="Facebook Website"
              projectName="Facebook Website"
              shortBrief="Utilizing responsive web design, we created a user-friendly interface that allows visitors to easily access articles, tutorials, and community forums."
              projectTitle="Facebook Clone Development"
              technologies="HTML, CSS, JavaScript, React, Node.js, MongoDB"
              situation="In today’s digital age, social media platforms play a crucial role in connecting people and sharing information."
              task="The primary objective of this project was to design and implement a fully functional social networking website."
              action="To achieve these goals, I utilized a combination of technologies."
              result="The project culminated in a fully functional social networking site that successfully replicated key features of Facebook."
            />
          </div>
        );
      case "fifth":
        return (
          <div>
            {/* Instagram */}
            <ItemPortfolio
              imgLogo="/src/assets/INSTAGRAM-LOGO.png"
              altLogo="Instagram Logo"
              src="/src/assets/INSTAGRAM.png"
              alt="Instagram Website"
              projectName="Instagram Website"
              shortBrief="Utilizing responsive web design, we aim to create an engaging and user-friendly experience that highlights trending posts."
              projectTitle="Instagram Clone Website"
              technologies="HTML, CSS, JavaScript, React, Node.js, MongoDB"
              situation="In todays digital age, social media platforms like Instagram play a crucial role in connecting people and sharing experiences."
              task="The primary goal of this project was to develop a fully functional Instagram-like website."
              action="To achieve these goals, I began by outlining the project requirements and creating wireframes for the user interface."
              result="The project culminated in a fully functional website that successfully replicated key features of Instagram."
            />
          </div>
        );
      default:
    }
  };

  return (
    <section className="max-w-[1100px] mx-auto flex flex-col items-center">
      <div className="flex flex-wrap justify-center mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <TabButton
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            label="first"
            children="Tokopedia"
          />
          <TabButton
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            label="second"
            children="Youtube"
          />
          <TabButton
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            label="third"
            children="TikTok"
          />
          <TabButton
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            label="fourth"
            children="Facebook"
          />
          <TabButton
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            label="fifth"
            children="Instagram"
          />
        </div>
      </div>
      <div className=" max-w-md text-center px-4">
        <p>
          Here are some projects that I have completed, and the clients are
          satisfied with the services I provided.
        </p>
      </div>
      <div className="mt-2">{renderContent()}</div>
    </section>
  );
};

export default PortfolioSection;
