import React from "react";
import "./DepositMoneyModal.css";
import { setrequestModal } from "../../../features/modal/modalsSlice";
import { useAppDispatch, RootState } from "../../../features/store";
import { useForm } from "../../../hooks/useForm";
import { depositMoneyApi } from "../../../features/user/UserApi";
import InputErrorLabel from "../../UI/InputErrorLabel/InputErrorLabel";

interface SendMoneyModalProps {}

const RequestMoneyModal = () => {
  const dispatch = useAppDispatch();

  const handleModal = () => {
    return dispatch(setrequestModal());
  };

  const sendFormData = {
    amount: "",
  };
  const sendErrorMessage = {
    amount: "",
  };

  const {
    data: depositData,
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
      console.log(depositData);
      dispatch(depositMoneyApi(depositData));
    },
  });
  return (
    <div className="RequestMoneyModalWrapper">
      <form onSubmit={handleSubmit}>
        <div className="RequestMoneyHeader">
          <div>
            <h2>Deposit Money</h2>
          </div>
          <div>
            <p>Enter the amount you want to deposit</p>
          </div>
        </div>

        <div className="RequestMoneyInputWrapper">
          <label>Amount</label>
          <input
            className="RequestMoneyInput"
            type="text"
            name="amount"
            onBlur={handleBlur()}
            onChange={handleChange()}
            value={depositData.amount || ""}
          />
          {errors.amount && <InputErrorLabel errorMessage={errors.amount} />}
        </div>

        <div className="RequestMoneyModalButtonGroup">
          <div className="RequestMoneyModalClose" onClick={handleModal}>
            <div>CANCEL</div>
          </div>
          <button className="RequestMoneyModalButton">
            <div>Deposit</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestMoneyModal;
