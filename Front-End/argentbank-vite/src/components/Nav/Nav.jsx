import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from "../../redux/reducers/authSlice";

const Nav = ({ logoSrc, logoAlt }) => {

    // Initialisation du dispatch pour envoyer des actions Redux
    const dispatch = useDispatch();
    // Utilisation du sélecteur pour accéder au profil utilisateur depuis le state Redux
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
                        <NavLink to="/sign-in" className="main-nav-item" onClick={SignOut}>
                            <i className="fa fa-user-circle"></i>
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
