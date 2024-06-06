import AccountList from "../AccountList/AccountList";

const EditUsername = () => {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Edit User Info</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" />
                    </div>
                    <button type="submit" className="sign-in-button">Save</button>
                    <button type="submit" className="sign-in-button">Cancel</button>
                </form>
            </section>
            <h2 className="sr-only">Accounts</h2>
            <AccountList />
        </main>
    );
};

export default EditUsername;