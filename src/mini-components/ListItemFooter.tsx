function ListItemFooter(props: any) {
  return (
    <li>
      <a href={props.href} className="text-gray-600 hover:text-gray-800">
        {props.children}
      </a>
    </li>
  );
}

export default ListItemFooter;
