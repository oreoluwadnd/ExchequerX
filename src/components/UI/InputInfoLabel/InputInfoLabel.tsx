import { SlNote } from "react-icons/sl";
import "./InputInfoLabel.css";

interface InputInfoLabelProps {
  infoMessage: string;
}

const InputInfoLabel: React.FC<InputInfoLabelProps> = ({ infoMessage }) => {
  return (
    <div className="InputInfoDiv">
      {infoMessage && (
        <>
          <SlNote />
          {infoMessage}
        </>
      )}
    </div>
  );
};

export default InputInfoLabel;
