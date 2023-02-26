import React, { FC } from "react";
import ScoopOptions from "components/organisms/Options";

const Scoops: FC = (): JSX.Element => {
  return (
    <>
      <h1>Scoops</h1>
      <ScoopOptions optionsType={"scoops"} />
    </>
  );
};

export default Scoops;
