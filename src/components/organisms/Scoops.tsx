import React, { FC } from "react";
import Options from "components/organisms/Options";

const Scoops: FC = (): JSX.Element => {
  return (
    <>
      <div>
        <h1>Scoops</h1>
        <Options optionsType={"scoops"} />
      </div>
      <div>
        <h1>Toppings</h1>
        <Options optionsType={"toppings"} />
      </div>
    </>
  );
};

export default Scoops;
