// Fetch pour permettre à l'utilisateur de se connecter

export const SignIn = async (email, password) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Invalid email or password. Please try again.');
    }

    const userData = await response.json();
    return userData.body.token;
};
