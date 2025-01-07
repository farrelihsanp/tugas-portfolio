import ItemSkillsSection from "../mini-components/ItemSkillsSection";
import ListSkills from "../mini-components/ListSkills";

const SkillsSection = () => {
  return (
    <div id="SkillsSection" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div id="frontend-skills" className="skill-card">
            <ListSkills
              nameSkill="Frontend Skills"
              description="I have experience in these frontend technologies:"
              listApps="HTML, CSS, JavaScript, React, Angular"
            />
            <div className="flex justify-center mt-4">
              <ItemSkillsSection src="/src/assets/HTML.svg" alt="HTML Logo" />
              <ItemSkillsSection src="/src/assets/CSS.svg" alt="CSS Logo" />
              <ItemSkillsSection
                src="/src/assets/JAVASCRIPT.svg"
                alt="JavaScript Logo"
              />
              <ItemSkillsSection src="/src/assets/REACT.svg" alt="React Logo" />
              <ItemSkillsSection
                src="/src/assets/ANGULAR.svg"
                alt="Angular Logo"
              />
            </div>
          </div>

          {/* Backend Skills */}
          <div id="backend-skills" className="skill-card">
            <ListSkills
              nameSkill="Backend Skills"
              description="I have experience in these backend technologies:"
              listApps="Node.js, Django, Ruby on Rails"
            />
            <div className="flex justify-center mt-4">
              <ItemSkillsSection
                src="/src/assets/NODE-JS.svg"
                alt="Node.js Logo"
              />
              <ItemSkillsSection
                src="/src/assets/DJANGO.svg"
                alt="Django Logo"
              />
              <ItemSkillsSection
                src="/src/assets/RUBYYY.svg"
                alt="Ruby on Rails Logo"
              />
            </div>
          </div>

          {/* DevOps Skills */}
          <div id="devops-skills" className="skill-card">
            <ListSkills
              nameSkill="DevOps Skills"
              description="I have experience in these DevOps technologies:"
              listApps="Docker, Git, Jenkins, AWS"
            />
            <div className="flex justify-center mt-4">
              <ItemSkillsSection
                src="/src/assets/DOCKER.svg"
                alt="Docker Logo"
              />
              <ItemSkillsSection
                src="/src/assets/GITHUB.svg"
                alt="GitHub Logo"
              />
              <ItemSkillsSection
                src="/src/assets/JENKINS.svg"
                alt="Jenkins Logo"
              />
              <ItemSkillsSection src="/src/assets/AWS.svg" alt="AWS Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
