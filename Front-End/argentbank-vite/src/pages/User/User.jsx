import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import AccountList from "../../components/AccountList/AccountList";

const User = () => {
    // On récupère les informations du profil utilisateur depuis le store Redux
    const userProfile = useSelector(state => state.auth.userProfile);

    // On extrait le nom de l'utilisateur 
    const userName = userProfile && userProfile.body ? userProfile.body.userName : '';

    const navigate = useNavigate();

    const DisplayEditUserName = (e) => {
        e.preventDefault();
        navigate("/EditUsername");
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userName}</h1>
                <button className="edit-button" onClick={DisplayEditUserName}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountList />
        </main>
    );
};

export default User;
