function ItemFooter(props: any) {
  return (
    <div className="flex flex-col mb-6 md:mb-0">
      <h5 className="font-bold text-lg mb-2">{props.name}</h5>
      <ul>{props.children}</ul>
    </div>
  );
}

export default ItemFooter;
