import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>{" | "}
      <Link to="/category/planets">Planets</Link>{" | "}
      <Link to="/category/stars">Stars</Link>{" | "}
      <Link to="/category/galaxies">Galaxies</Link>{" | "}
      <Link to="/category/nebulae">Nebulae</Link>
    </nav>
  );
}

export default NavBar;