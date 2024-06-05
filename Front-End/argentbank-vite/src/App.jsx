import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import HomeContent from "./pages/HomeContent/HomeContent"
import SignIn from "./pages/SignIn/SignIn"
import User from "./components/User/User"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomeContent />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/user" element={<User />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;