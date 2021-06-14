import { HeaderContainer, Logo, Author } from "./Header.styles";
import LogoIcon from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>
          <img src={LogoIcon} alt="logo" />
        </Logo>
      </Link>
      <Author>Mauricio Brito</Author>
    </HeaderContainer>
  );
}

export default Header;
