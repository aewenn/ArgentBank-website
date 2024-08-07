import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AccountList from "../../components/AccountList/AccountList";
import EditUsername from "../../components/EditUsername/EditUsername";
import { useGetUserProfile } from "../../hooks/useGetUserProfile";

const User = () => {
    const [isEditing, setIsEditing] = useState(false);
    const { GetUserProfile, error, isLoading } = useGetUserProfile();
    const userProfile = useSelector(state => state.auth.userProfile);

    // On extrait le nom de l'utilisateur du profil
    const userName = userProfile?.body?.userName || '';

    // Pour ouvrir le formulaire et modifier le nom d'utilisateur
    const EditName = (e) => {
        e.preventDefault();
        setIsEditing(true);
    };

    // Pour fermer le formulaire au clic sur Cancel
    const CancelForm = () => {
        setIsEditing(false);
    };

    useEffect(() => {
        GetUserProfile();
    }, [GetUserProfile]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <main className="main bg-dark">
            {isEditing ? (
                <EditUsername onCancel={CancelForm} />
            ) : (
                <div className="header">
                    <h1>Welcome back<br />{userName}</h1>
                    <button className="edit-button" onClick={EditName}>Edit Name</button>
                </div>
            )}
            <>
                <h2 className="sr-only">Accounts</h2>
                <AccountList />
            </>
        </main>
    );
};

export default User;


