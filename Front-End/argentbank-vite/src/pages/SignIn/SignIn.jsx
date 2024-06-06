import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, UserInfo } from "../../redux/reducers/authSlice";

// Etat local pour gérer les données du formulaire
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // Par défaut, RememberMe n'est pas coché
    const [error, setError] = useState(null); // Par défaut, il n'y a pas d'erreur
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!response.ok) { // On vérifie que la réponse de l'API est ok
                throw new Error('Invalid email or password. Please try again.');
            }

            const userData = await response.json();
            const token = userData.body.token; // Obtention du token à partir des données de l'utilisateur
            dispatch(loginUser({ token: token })); // Dispatch de loginUser pour mettre à jour le store avec le token
            localStorage.setItem('token', token);

            // Pour rediriger l'utilisateur vers son profil
            const userResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (userResponse.ok) {
                const userData = await userResponse.json();
                dispatch(UserInfo(userData)); // Stocke les informations de l'utilisateur dans le state Redux
            }
            navigate("/user")
        } catch (error) {
            setError(error.message);
        }
    }

    const EmailChange = (e) => {
        setEmail(e.target.value); // Met à jour l'état 'email'
    }

    const PasswordChange = (e) => {
        setPassword(e.target.value); // Met à jour l'état 'password'
    }

    const RememberMeChange = (e) => {
        setRememberMe(e.target.checked); // Met à jour l'état 'rememberme'
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={email} onChange={EmailChange} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={PasswordChange} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={RememberMeChange} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default SignIn;
