import { ListItemFooterProps } from "../types/portfolio";

function ListItemFooter(props: ListItemFooterProps) {
  return (
    <li>
      <a href={props.href} className="text-white">
        {props.children}
      </a>
    </li>
  );
}

export default ListItemFooter;
