import "./OtpModal.css";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../features/store";
import { setPage } from "../../../features/auth/authSlice";

interface SignUpModalProps {
  successMessage: string;
}

const OtpModal: React.FC<SignUpModalProps> = ({ successMessage }) => {
  const dispatch = useAppDispatch();
  const pageChange = () => {
    dispatch(setPage());
  };

  return (
    <div className="otpModalWrapper">
      <div>
        <MdVerified className="otpModalIcon" />
      </div>
      <div>
        <h4 className="otpModalHeader">SUCCESS</h4>
        {successMessage}
      </div>
      <Link to={"/login"} className="otpModalButton" onClick={pageChange}>
        Login
      </Link>
    </div>
  );
};
export default OtpModal;
