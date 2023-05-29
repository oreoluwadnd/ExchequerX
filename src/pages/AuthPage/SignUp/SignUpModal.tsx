import "./SignUpModal.css";
import { ImUserCheck } from "react-icons/im";
import { pageChange } from "../../../hooks/useSetPage";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../features/store";
import { setPage } from "../../../features/auth/authSlice";

interface SignUpModalProps {
  successMessage: string;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ successMessage }) => {
  const dispatch = useAppDispatch();
  const pageChange = () => {
    dispatch(setPage());
  };

  return (
    <div className="SignUpModalWrapper">
      <div>
        <ImUserCheck className="signUpModalIcon" />
      </div>
      <div>
        <h4 className="signUpModalHeader">SUCCESS</h4>
        {successMessage}
      </div>
      <Link to={"/otp"} className="signUpModalButton" onClick={pageChange}>
        Verify
      </Link>
    </div>
  );
};
export default SignUpModal;
