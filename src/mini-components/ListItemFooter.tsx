import { ListItemFooterProps } from "../types/portfolio";

function ListItemFooter(props: ListItemFooterProps) {
  return (
    <li>
      <a href={props.href} className="text-white hover:text-gray-800">
        {props.children}
      </a>
    </li>
  );
}

export default ListItemFooter;
