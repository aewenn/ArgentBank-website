import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import { IsConnected } from "./redux/reducers/authSlice";

const App = () => {
    const isConnected = useSelector(IsConnected);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/sign-in"
                        element={<SignIn />}
                    />
                    <Route
                        path="/user"
                        element={
                            isConnected ? <User /> : <Navigate to="/sign-in" />
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
