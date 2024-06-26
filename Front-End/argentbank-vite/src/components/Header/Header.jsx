import Logo from "../../assets/images/argentBankLogo.webp";
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <header>
            <Nav
                logoSrc={Logo}
                logoAlt="Argent Bank Logo"
            />
        </header>
    );
};

export default Header;
