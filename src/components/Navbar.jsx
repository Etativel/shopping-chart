import "../styles/Navigation.css";
function Navigation() {
  return (
    <div className="nav-container">
      <ul className="left-nav">
        <li className="logo">Logo</li>
        <li>MEN</li>
        <li>WOMEN</li>
      </ul>
      <ul className="right-nav">
        <li>Search bar</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}

export { Navigation };
