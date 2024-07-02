import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { UserInfo } from "../redux/reducers/authSlice";
import { FetchUserProfile } from "../services/API/FetchUserProfile";

// Hook pour récupérer les infos utilisateur
export const useGetUserProfile = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const GetUserProfile = useCallback(async () => {
        try {
            console.log("Starting API call, setting isLoading to true");
            setIsLoading(true);

            const token = localStorage.getItem('token');
        
            if (!token) {
                setError("No token found");
                setIsLoading(false);
                console.log("No token found, setting isLoading to false");
                return;
            }

            const userProfile = await FetchUserProfile(token);
            dispatch(UserInfo(userProfile));
            setIsLoading(false);
            console.log("API call finished, setting isLoading to false");
            return userProfile;

        } catch (error) {
            setError(error.message);
            setIsLoading(false);
            console.log("Error occurred, setting isLoading to false");
            return null;
        }
    }, [dispatch]);

    return { GetUserProfile, error, isLoading };
};

