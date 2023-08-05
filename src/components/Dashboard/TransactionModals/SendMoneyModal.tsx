import React, { useState } from "react";
import "./SendMoneyModal.css";
import { setSendMoney } from "../../../features/modal/modalsSlice";
import { useAppDispatch, RootState } from "../../../features/store";
import { useForm } from "../../../hooks/useForm";
import { transferMoneyApi } from "../../../features/user/UserApi";
import InputErrorLabel from "../../../components/UI/InputErrorLabel/InputErrorLabel";

interface SendMoneyModalProps {
  children?: React.ReactNode;
}

const SendMoneyModal: React.FC<SendMoneyModalProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();

  const handleModal = () => {
    return dispatch(setSendMoney());
  };

  const sendFormData = {
    email: "",
    amount: "",
  };
  const sendErrorMessage = {
    email: "",
    amount: "",
  };

  const {
    data: sendData,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
  } = useForm({
    initailErrorMessage: sendFormData,
    initialValues: sendErrorMessage,
    sanitizeFn: (value) => {
      return value.trim();
    },
    validations: {
      email: {
        required: {
          value: true,
          message: "Email is required",
        },
        pattern: {
          value: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
          message: "Email is invalid",
        },
      },
      amount: {
        required: {
          value: true,
          message: "Amount is required",
        },
        custom: {
          length: {
            isValid: (value: any) => value > 100,
            message: "amount must be more than 100",
          },
        },
      },
    },
    onSubmit: () => {
      dispatch(transferMoneyApi(sendData));
    },
  });

  return (
    <div className="SendMoneyModalWrapper">
      <form onSubmit={handleSubmit}>
        <div className="SavingsMoneyHeader">
          <div>
            <h2>Send Money To your friends</h2>
          </div>
          <div>
            <p>Enter the amount you want to send</p>
          </div>
        </div>

        <div className="SendMoneyInputWrapper">
          <label>Tag</label>
          <input
            className="SendMoneyInput"
            placeholder="Search for a email..."
            name="email"
            type="text"
            onBlur={handleBlur()}
            onChange={handleChange()}
            value={sendData.email || ""}
          />
          {errors.email && <InputErrorLabel errorMessage={errors.email} />}
        </div>
        <div className="SendMoneyInputWrapper">
          <label>Amount</label>
          <input
            className="SendMoneyInput"
            type="text"
            name="amount"
            onBlur={handleBlur()}
            onChange={handleChange()}
            value={sendData.amount || ""}
          />
          {errors.amount && <InputErrorLabel errorMessage={errors.amount} />}
        </div>

        <div className="SendMoneyModalButtonGroup">
          <div className="SendMoneyModalClose" onClick={handleModal}>
            <div>CANCEL</div>
          </div>
          <button className="SendMoneyModalButton">SEND</button>
        </div>
      </form>
    </div>
  );
};
9;

export default SendMoneyModal;
