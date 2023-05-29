import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/MainPage/LandingPage";
import SignUp from "./pages/AuthPage/SignUp/SignUp";
import Login from "./pages/AuthPage/Login/Login";
import OTP from "./pages/AuthPage/OTP/OTP";
import ResetPassword from "./pages/AuthPage/ResetPassword/ResetPassword";
import Overview from "./components/Dashboard/Overview/Overview";
import Card from "./components/Dashboard/Cards/Card";
import Settings from "./components/Dashboard/Settings/Settings";
import Bills from "./components/Dashboard/BIllPayment/BIlls";
import Transaction from "./components/Dashboard/Transaction/Transaction";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/cards" element={<Card />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="*" element={<p> NOT FOUND</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
