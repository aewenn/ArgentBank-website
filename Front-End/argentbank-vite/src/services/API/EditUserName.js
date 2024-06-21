// Fetch pour permettre la modification du nom d'utilisateur

export const EditUserName = async (token, username) => {
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

    return responseData.body;
};