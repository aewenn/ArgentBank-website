import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import HomeContent from "./containers/HomeContent/HomeContent"
import SignIn from "./containers/SignIn/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomeContent />} />
                    <Route path="sign-in" element={<SignIn />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;