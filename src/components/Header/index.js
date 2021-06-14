import { HeaderContainer, Logo, Author } from "./Header.styles";
import LogoIcon from "../../assets/icons/logo.png";

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src={LogoIcon} alt="logo" />
      </Logo>
      <Author>Mauricio Brito</Author>
    </HeaderContainer>
  );
}

export default Header;
