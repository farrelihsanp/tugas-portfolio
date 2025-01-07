import { ItemAboutMeProps } from "../types/portfolio";

function ItemAboutMe(props: ItemAboutMeProps) {
  return (
    <section className="border-2 border-gray-300 rounded-lg w-80 h-80 p-4 text-center flex flex-col mx-4 flex-1 items-center justify-center hover:bg-gray-100 transition duration-300">
      <div className="flex items-center justify-center w-16 h-16 mb-4 border border-gray-300 rounded-full">
        <img
          src={props.src}
          alt={props.alt}
          className="w-128 h-128 rounded-full"
        />
      </div>
      <h2 className="text-2xl font-semibold text-blue-600">{props.name}</h2>
      <p className="mt-2 text-gray-600 text-center px-4">{props.description}</p>
    </section>
  );
}

export default ItemAboutMe;
