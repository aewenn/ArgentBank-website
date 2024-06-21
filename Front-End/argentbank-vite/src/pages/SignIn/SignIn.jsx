import { useState } from "react";
import { useSignIn } from "../../hooks/useSignIn";
import { useGetUserProfile } from "../../hooks/useGetUserProfile";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    // Etats
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // Par défaut, RememberMe n'est pas coché

    // Hooks
    const { handleSignIn, error: signInError } = useSignIn(); // Utilisation du hook useSignIn
    const { GetUserProfile, error: profileError } = useGetUserProfile(); // Utilisation du hook useGetUserProfile
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await handleSignIn(email, password); // Appel à handleSignIn avec email et password
            if (token) {
                await GetUserProfile(token); // Récupération du profil utilisateur avec le token obtenu
                navigate('/user');
            }
        } catch (error) {
            console.error("Error during sign-in", error);
        }
    };

    const EmailChange = (e) => {
        setEmail(e.target.value); // Met à jour l'état 'email'
    };

    const PasswordChange = (e) => {
        setPassword(e.target.value); // Met à jour l'état 'password'
    };

    const RememberMeChange = (e) => {
        setRememberMe(e.target.checked); // Met à jour l'état 'rememberme'
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {(signInError || profileError) && <p className="error-message">{signInError || profileError}</p>}
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