import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import SignIn from "./pages/SignIn/SignIn"
import User from "./pages/User/User"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EditUsername from "./components/EditUsername/EditUsername"

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/EditUsername" element={<EditUsername />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;