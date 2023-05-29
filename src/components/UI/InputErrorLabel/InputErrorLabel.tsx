import { BiErrorCircle } from "react-icons/bi";
import "./InputErrorLabel.css";

interface InputErrorLabelProps {
  errorMessage: string;
}

const InputErrorLabel: React.FC<InputErrorLabelProps> = ({ errorMessage }) => {
  return (
    <div className="InputErrorDiv">
      {errorMessage && (
        <>
          <BiErrorCircle />
          {errorMessage}
        </>
      )}
    </div>
  );
};

export default InputErrorLabel;
