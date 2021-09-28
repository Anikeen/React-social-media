
function Menu(props) {
  return (
    <nav>
      <ul className={props.className}>
        {props.children}
      </ul>
    </nav>
  );
}

export default Menu;