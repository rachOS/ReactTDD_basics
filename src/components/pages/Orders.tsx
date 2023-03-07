import React from "react";
import OrderEntry from "components/organisms/OrderEntry";

type Props = {
  type: any;
};

const Orders: React.FC<Props> = ({ type }: Props): JSX.Element => {
  return (
    <>
      <h1>Orders</h1>
      <OrderEntry />
    </>
  );
};

export default Orders;
