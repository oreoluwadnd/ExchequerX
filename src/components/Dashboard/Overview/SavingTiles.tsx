import { setSavingsMoneyModal } from "../../../features/modal/modalsSlice";
import { useAppDispatch, RootState } from "../../../features/store";
import {
  HiArrowDownOnSquareStack,
  HiArrowUpOnSquareStack,
} from "react-icons/hi2";
import { IoIosLock } from "react-icons/io";

import "./SavingTiles.css";

interface SavingTilesProps {
  SavingTilesTitle: string;
  SavingTilesAmount: string;
}

const SavingTiles: React.FC<SavingTilesProps> = ({
  SavingTilesTitle,
  SavingTilesAmount,
}) => {
  const dispatch = useAppDispatch();
  const handleModal = () => {
    return dispatch(setSavingsMoneyModal());
  };

  return (
    <div className="SavingTilesWrapper">
      <div className="SavingTilesText">
        <p>{SavingTilesTitle}</p>
        <h3>{SavingTilesAmount}</h3>
      </div>

      <div className="SavingTilesIcon">
        <div className="SavingTilesIconWrapper" onClick={handleModal}>
          <IoIosLock size={25} />
        </div>
        <div className="SavingTilesIconWrapper" onClick={handleModal}>
          <HiArrowUpOnSquareStack size={25} />
        </div>
        <div className="SavingTilesIconWrapper" onClick={handleModal}>
          <HiArrowDownOnSquareStack size={25} />
        </div>
      </div>
    </div>
  );
};

export default SavingTiles;
