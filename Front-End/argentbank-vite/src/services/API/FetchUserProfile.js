// Fetch pour récupérer les informations utilisateur

export const FetchUserProfile = async (token) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user profile.');
    }

    const userData = await response.json();
    return userData;
};
