import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = ({ logoSrc, logoAlt }) => {
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={logoSrc}
                    alt={logoAlt}
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink to="/sign-in" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    );
};

Nav.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    logoAlt: PropTypes.string.isRequired,
};

export default Nav;
