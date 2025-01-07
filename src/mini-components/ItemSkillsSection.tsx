import { ItemSkillsSectionProps } from "../types/portfolio";

function ItemSkillsSection(props: ItemSkillsSectionProps) {
  return (
    <section className="flex flex-col items-center justify-center bg-white p-4 rounded">
      <img
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:scale-110 transition duration-300"
        src={props.src}
        alt={props.alt}
      />
    </section>
  );
}

export default ItemSkillsSection;
