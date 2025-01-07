function ListSkills(props: any) {
  return (
    <div className="flex justify-center items-center p-8 m-4 bg-white">
      <div id="frontend-skills flex-col justify-center align-center text-center">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          {props.nameSkill}
        </h1>
        <p className="text-gray-600 mb-8 text-center">{props.description}</p>
        <div className="flex gap-2 justify-center">{props.listApps}</div>
      </div>
    </div>
  );
}

export default ListSkills;
