import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditUserName } from "../services/API/EditUserName";
import { updateUsername as updateUsernameAction } from "../redux/reducers/authSlice";

// Hook pour mettre à jour le nom d'utilisateur
const useUpdateUserName = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.accessToken);
    const [error, setError] = useState(null); // Pas d'erreur au départ

    const updateUsername = async (username) => {
        if (!token) {
            console.error("Token is not defined.");
            return;
        }
        setError(null);

        try {
            const responseBody = await EditUserName(token, username);

            // Mise à jour du profil utilisateur dans le store Redux avec le nouveau nom d'utilisateur
            dispatch(updateUsernameAction({ userName: responseBody.userName }));

            // Fermeture du formulaire après la mise à jour
            return responseBody;
            
        } catch (err) {
            setError(err.message);
            console.error("Error updating username:", err);
            throw new Error(err.message)
        }
    };

    return { updateUsername, error };
};

export default useUpdateUserName;
