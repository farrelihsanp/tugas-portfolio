import { NavbarProps } from "../types/portfolio";

function ItemNavbar(props: NavbarProps) {
  return (
    <section>
      <a
        href={props.href}
        className="text-black hover:bg-blue-600 hover:text-white py-2 px-4 rounded-full transition duration-300 ease-in-out"
      >
        {props.children}
      </a>
    </section>
  );
}

export default ItemNavbar;
