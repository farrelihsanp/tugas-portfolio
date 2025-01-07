import { ListSkillsProps } from "../types/portfolio";

function ListSkills(props: ListSkillsProps) {
  return (
    <section className="grid  justify-center items-center p-8 bg-white">
      <div id="frontend-skills flex-col justify-center align-center text-center">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          {props.nameSkill}
        </h1>
        <p className="text-gray-600 mb-8 text-center">{props.description}</p>
        <div className=" text-center">{props.listApps}</div>
      </div>
    </section>
  );
}

export default ListSkills;
