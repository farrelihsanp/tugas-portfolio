function ItemNavbar(props: any) {
  return (
    <div>
      <a
        href={props.href}
        className="text-black hover:bg-blue-600 hover:text-white py-2 px-4 rounded-full transition duration-300 ease-in-out"
      >
        {props.children}
      </a>
    </div>
  );
}

export default ItemNavbar;
