import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, IsConnected } from "../../redux/reducers/authSlice";

const Nav = ({ logoSrc, logoAlt }) => {
    const dispatch = useDispatch();
    const isConnected = useSelector(IsConnected);
    const userProfile = useSelector(state => state.auth.userProfile);

    const handleSignOut = () => {
        dispatch(logoutUser());
    };

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logoSrc} alt={logoAlt} />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {isConnected ? (
                    <>
                        <Link to="/user" className="main-nav-item">
                            {userProfile && userProfile.body && userProfile.body.userName}
                            <i className="fa fa-user-circle"></i>
                        </Link>
                        <NavLink to="/sign-in" className="main-nav-item" onClick={handleSignOut}>
                            Sign Out
                        </NavLink>
                    </>
                ) : (
                    <NavLink to="/sign-in" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

Nav.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    logoAlt: PropTypes.string.isRequired,
};

export default Nav;
