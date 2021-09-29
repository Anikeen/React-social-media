import { Link } from "react-router-dom";

function SidebarItem(props) {
  return (
    <Link className="sidebar__Item" to={props.link}>
      {props.text}
    </Link>
  );
}

export default SidebarItem;