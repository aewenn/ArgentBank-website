import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import useUpdateUserName from "../../hooks/useUpdateUserName";

const EditUsername = ({ onCancel }) => {
    const { updateUsername, error } = useUpdateUserName(); // Utilisation du hook useUpdateUsername

    // Récupération des infos utilisateur depuis le store Redux
    const userProfile = useSelector(state => state.auth.userProfile);

    // State local pour gérer le username modifié dans le formulaire
    const [username, setUsername] = useState('');

    // Mise à jour du username lorsque le profil utilisateur change
    useEffect(() => {
        if (userProfile?.body?.userName) {
            setUsername(userProfile.body.userName);
        }
    }, [userProfile]);

    // Mise à jour du state local "username" avec la nouvelle valeur
    const NewUsername = (e) => setUsername(e.target.value);

    // Envoi du formulaire
    const SubmitUsername = (e) => {
        e.preventDefault();
        if (username === '') { // Si username est vide, pas de mise à jour
            console.log("Username cannot be empty.");
            return;
        }
        // Si username n'est pas vide, mettre à jour
        updateUsername(username, onCancel);
    };


    return (
        <section className="sign-in-content" id="edit-username">
            <h1>Edit user info</h1>
            <form onSubmit={SubmitUsername}>
                <div className="input-wrapper">
                    <label htmlFor="username">User Name :</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={NewUsername}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="firstname">First Name :</label>
                    <input
                        type="text"
                        id="firstname"
                        value={userProfile?.body?.firstName || ''}
                        disabled // Ne peut pas être modifié
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastname">Last Name :</label>
                    <input
                        type="text"
                        id="lastname"
                        value={userProfile?.body?.lastName || ''}
                        disabled // Ne peut pas être modifié
                    />
                </div>
                {username === '' && (
                    <p className="error-message">Username cannot be empty.</p> // Message d'erreur si username est vide
                )}
                <div className="form_btn">
                    <button type="submit" className="sign-in-button">Save</button>
                    <button type="button" className="sign-in-button" onClick={onCancel}>Cancel</button>
                </div>
                {error && <div className="error">{error}</div>}
            </form>
        </section>
    );
};

EditUsername.propTypes = {
    onCancel: PropTypes.func.isRequired,
};

export default EditUsername;
