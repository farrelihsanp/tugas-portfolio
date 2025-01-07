import ItemSkillsSection from "../mini-components/ItemSkillsSection";
import ListSkills from "../mini-components/ListSkills";

const SkillsSection = () => {
  return (
    <section
      id="SkillsSection"
      className="bg-white py-16 max-w-[1100px] mx-auto px-4"
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 ">
          <div id="frontend-skills">
            <ListSkills
              nameSkill="Frontend Skills"
              description="I have experience in these frontend technologies:"
              listApps="HTML, CSS, JavaScript"
            />
            <div className="justify-center justify-items-center flex">
              <ItemSkillsSection src="/src/assets/HTML.svg" alt="HTML Logo" />
              <ItemSkillsSection src="/src/assets/CSS.svg" alt="CSS Logo" />
              <ItemSkillsSection
                src="/src/assets/JAVASCRIPT.svg"
                alt="JavaScript Logo"
              />
            </div>
          </div>
          <div id="backend-skills">
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
          <div id="devops-skills">
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
    </section>
  );
};

export default SkillsSection;
