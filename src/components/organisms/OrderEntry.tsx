import React, { FC } from "react";
import Options from "components/organisms/Options";
import {
  OrderDetailsProvider,
  useOrderDetailsContext,
} from "../../contexts/ordersContext";

const OrderEntry: FC = (): JSX.Element => {
  const { total, prices } = useOrderDetailsContext();
  return (
    <div>
      <header>
        <h1 style={{ fontWeight: 700, fontStyle: "italic", fontSize: "2em" }}>
          Design Sour Sundae
        </h1>
        <h2>Grand total : {`${total.scoops}`}</h2>
      </header>
      <section>
        <div>
          <h2 style={{ fontWeight: 700 }}>Scoops: ${prices.scoops} each</h2>
          <h3 style={{ fontWeight: 300, color: "red" }}>
            Scoops total : {total.scoops}
          </h3>
        </div>
        <Options optionsType={"scoops"} />
      </section>
      <section>
        <div>
          <h2 style={{ fontWeight: 700 }}>Toppings: ${prices.toppings} each</h2>
          <h3 style={{ fontWeight: 300, color: "red" }}>
            Toppings total : $4.50
          </h3>
        </div>
        <Options optionsType={"toppings"} />
      </section>
    </div>
  );
};

export default OrderEntry;
