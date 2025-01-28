import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast Pizza React Co.</Link>
      <SearchOrder />
      <p>Lukasz</p>
    </header>
  );
}

export default Header;
