import ItemSkillsSection from "../mini-components/ItemSkillsSection";
import ListSkills from "../mini-components/ListSkills";

const SkillsSection = () => {
  return (
    <section
      id="SkillsSection"
      className="bg-white py-14 max-w-[1100px] mx-auto px-4 my-9"
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div
            id="frontend-skills"
            className="flex flex-col h-full p-4 border rounded-lg shadow-md"
          >
            <ListSkills
              nameSkill="Frontend Skills"
              description="I have experience in these frontend technologies:"
              listApps="HTML, CSS, JavaScript"
            />
            <div className="flex justify-center mt-4">
              <ItemSkillsSection src="/HTML.svg" alt="HTML Logo" />
              <ItemSkillsSection src="/CSS.svg" alt="CSS Logo" />
              <ItemSkillsSection src="/JAVASCRIPT.svg" alt="JavaScript Logo" />
            </div>
          </div>
          <div
            id="backend-skills"
            className="flex flex-col h-full p-4 border rounded-lg shadow-md"
          >
            <ListSkills
              nameSkill="Backend Skills"
              description="I have experience in these backend technologies:"
              listApps="Node.js, Django, Ruby on Rails"
            />
            <div className="flex justify-center mt-4">
              <ItemSkillsSection src="/NODE-JS.svg" alt="Node.js Logo" />
              <ItemSkillsSection src="/DJANGO.svg" alt="Django Logo" />
              <ItemSkillsSection src="/RUBYYY.svg" alt="Ruby on Rails Logo" />
            </div>
          </div>
          <div
            id="devops-skills"
            className="flex flex-col h-full p-4 border rounded-lg shadow-md"
          >
            <ListSkills
              nameSkill="DevOps Skills"
              description="I have experience in these DevOps technologies:"
              listApps="Docker, Git, Jenkins, AWS"
            />
            <div className="flex justify-center mt-4">
              <ItemSkillsSection src="/DOCKER.svg" alt="Docker Logo" />
              <ItemSkillsSection src="/GITHUB.svg" alt="GitHub Logo" />
              <ItemSkillsSection src="/JENKINS.svg" alt="Jenkins Logo" />
              <ItemSkillsSection src="/AWS.svg" alt="AWS Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
