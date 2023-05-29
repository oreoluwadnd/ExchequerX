import React from "react";
import "./MobileBottomSheet.css";
import { createPortal } from "react-dom";

interface MobileBottomSheetProps {
  children?: React.ReactNode;
}

const MobileBottomSheet: React.FC<MobileBottomSheetProps> = ({ children }) => {
  return createPortal(
    <div className="MobileBottomSheetWrapper">
      <div>oreoluwa</div>
    </div>,
    document.body
  );
};

export default MobileBottomSheet;
