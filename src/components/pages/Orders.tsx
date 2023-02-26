import React from "react";
import Scoops from "components/organisms/Scoops";

type Props = {
  type: any;
};

const Orders: React.FC<Props> = ({ type }: Props): JSX.Element => {
  return (
    <>
      <h1>Orders</h1>
      <Scoops />
    </>
  );
};

export default Orders;
