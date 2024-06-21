import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserInfo } from "../redux/reducers/authSlice";
import { FetchUserProfile } from "../services/API/FetchUserProfile";

// Hook pour récupérer les infos utilisateur
export const useGetUserProfile = () => {
    const [error, setError] = useState(null); // Pas d'erreur au départ
    const dispatch = useDispatch();

    const GetUserProfile = async (token) => {
        try {
            const userProfile = await FetchUserProfile(token);
            dispatch(UserInfo(userProfile));
            return userProfile;
        } catch (error) {
            setError(error.message);
            return null;
        }
    };

    return { GetUserProfile, error };
};
