import Account from "../Account/Account";
import AccountData from "../../data/account.json";

const AccountList = () => {
    return (
        <>
            {AccountData.map((account, index) => (
                <Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </>
    );
};

export default AccountList;
