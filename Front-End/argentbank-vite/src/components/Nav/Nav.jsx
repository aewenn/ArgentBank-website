import PropTypes from 'prop-types';

const Nav = ({ logoSrc, logoAlt }) => {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
                <img
                    className="main-nav-logo-image"
                    src={logoSrc}
                    alt={logoAlt}
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./sign-in.html">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </nav>
    );
};

Nav.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    logoAlt: PropTypes.string.isRequired,
};

export default Nav;
