function ItemSkillsSection(props: any) {
  return (
    <div
      className="flex-row justify-center align-center bg-white p-4 rounded 
     "
    >
      <img
        className="w-14 h-14 hover:scale-125  transition duration-300"
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}

export default ItemSkillsSection;
