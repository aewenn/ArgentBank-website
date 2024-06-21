import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/reducers/authSlice";
import { SignIn } from "../services/API/SignIn";

// Hook pour permettre à l'utilisateur de se connecter
export const useSignIn = () => {
    const [error, setError] = useState(null); // Pas d'erreur au départ
    const dispatch = useDispatch();

    const handleSignIn = async (email, password) => {
        try {
            const token = await SignIn(email, password);
            dispatch(loginUser({ token })); // Dispatch avec le token reçu
            localStorage.setItem('token', token);
            return token;
        } catch (error) {
            setError(error.message);
            return null;
        }
    };

    return { handleSignIn, error };
};
