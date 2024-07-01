import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserInfo } from "../redux/reducers/authSlice";
import { FetchUserProfile } from "../services/API/FetchUserProfile";

// Hook pour récupérer les infos utilisateur
export const useGetUserProfile = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    const GetUserProfile = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            setError("No token found");
            return;
        }

        try {
            const userProfile = await FetchUserProfile(token);
            dispatch(UserInfo(userProfile));
            setIsLoading(false);
            return userProfile;

        } catch (error) {
            setError(error.message);
            setIsLoading(false);
            return null;
        }
    };

    return { GetUserProfile, error, isLoading };
};

