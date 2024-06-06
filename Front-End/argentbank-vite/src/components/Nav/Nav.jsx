import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from "../../redux/reducers/authSlice";

const Nav = ({ logoSrc, logoAlt }) => {

    const dispatch = useDispatch();
    // On utilise le sélecteur pour accéder au profil utilisateur depuis le state Redux
    const userProfile = useSelector(state => state.auth.userProfile);

    const SignOut = () => {
        // Suppression du token du localStorage
        localStorage.removeItem("token");
        // Déconnexion
        dispatch(logoutUser());
    };

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
                {userProfile && userProfile.body ? (
                    <>
                        <Link to="/user">
                            {userProfile.body.userName}
                            <i className="fa fa-user-circle"></i></Link>
                        <NavLink to="/sign-in" className="main-nav-item" onClick={SignOut}>
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
