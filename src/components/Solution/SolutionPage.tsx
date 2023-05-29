import React from "react";
import SolutionLeft from "./SolutionLeft";
import SolutionRight from "./SolutionRight";

const SolutionPage: React.FC = () => {
  return (
    <>
      <SolutionLeft
        header="Free Transfers & Low 
    Cross-border Rates"
        text="More money stays in your pocket, and more money arrives in
          theirs. With seamless connectivity No overdraft. No minimum balance. 
          No monthly fees. No foreign transaction fees."
        imgS="https://www.chime.com/wp-content/uploads/2020/03/no-fees.png"
        imgL="https://images.ctfassets.net/ss5kfr270og3/5DKaLIPkvSqQ7uwZm7c66k/616acce8528e30448df3496b02c9870d/financial-access-opportunity_2x.png?fm=webp&q=70"
      />{" "}
      <SolutionRight />
      <SolutionLeft
        header="Make your money grow fast "
        text=" 2.00% Annual Percentage Yield Set money 
        aside with Automatic Savings features. And never pay a fee on 
        your Savings Account."
        imgS="https://www.chime.com/wp-content/uploads/2022/10/2.00-APY.png"
        imgL="https://images.ctfassets.net/ss5kfr270og3/65Pkd8hgcxDkyWcsPUTNf8/10608a9246a5525e7a9dcc8048116d26/fa-dataconnectivity-scene_2x.png?fm=webp&q=70"
      />
    </>
  );
};

export default SolutionPage;
