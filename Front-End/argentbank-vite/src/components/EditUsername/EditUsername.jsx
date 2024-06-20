import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUsername } from '../../redux/reducers/authSlice';

const EditUsername = ({ onCancel }) => {
    const dispatch = useDispatch();

    // Récupération des infos utilisateur et du token depuis le store Redux
    const userProfile = useSelector(state => state.auth.userProfile);
    const token = useSelector(state => state.auth.accessToken);

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

    // Modification du username
    const UpdateUsername = async (e) => {
        e.preventDefault();

        if (!token) {
            console.error("Token is not defined.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ userName: username }),
            });

            const responseData = await response.json();
            if (!response.ok) {
                throw new Error("Failed to update username.");
            }

            // Mise à jour du profil utilisateur dans le store Redux avec le nouveau nom d'utilisateur
            dispatch(updateUsername({ userName: responseData.body.userName }));

            // Fermeture du formulaire après la mise à jour
            onCancel();

        } catch (error) {
            console.error("Error updating username:", error);
        }
    };

    return (
        <section className="sign-in-content" id="edit-username">
            <h1>Edit user info</h1>
            <form onSubmit={UpdateUsername}>
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
                <div className="form_btn">
                    <button type="submit" className="sign-in-button">Save</button>
                    <button type="button" className="sign-in-button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </section>
    );
};


EditUsername.propTypes = {
    onCancel: PropTypes.func.isRequired,
};

export default EditUsername;