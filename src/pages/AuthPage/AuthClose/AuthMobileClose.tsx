import { BsArrowLeftSquareFill } from "react-icons/bs";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import "./AuthMobileClose.css";
const AuthMobileClose: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="AuthMobileClose" onClick={handleBack}>
      <BsArrowLeftSquareFill size={35} />
    </div>
  );
};

export default AuthMobileClose;
