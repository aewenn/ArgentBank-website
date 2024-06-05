import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from "../../redux/reducers/authSlice";


// Etat local pour gérer les données du formulaire
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
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
                throw new Error('Failed to sign in'); // Erreur si la connexion échoue
            }

            const userData = await response.json();
            const token = userData.token; // Obtention du token à partir des données de l'utilisateur
            dispatch(loginUser({ token: token})); // Dispatch de loginUser pour mettre à jour le store avec le token
            navigate("/user")
        } catch (error) {
            console.log(error); // Erreur si la connexion échoue
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Met à jour l'état 'email'
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value); // Met à jour l'état 'password'
    }

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked); // Met à jour l'état 'rememberme'
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMeChange} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default SignIn;