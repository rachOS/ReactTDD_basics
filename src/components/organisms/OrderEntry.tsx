import React, {FC} from "react";
import Options from "components/organisms/Options";
import {OrderDetailsProvider} from "../../contexts/ordersContext";

const OrderEntry: FC = (): JSX.Element => {
    return (
        <div>
            <h1>Design Sour Sundae</h1>
            <OrderDetailsProvider>
                <div>
                    <h1>Scoops</h1>
                    <span>$2.00 each</span>

                    <Options optionsType={"scoops"}/>
                </div>
                <div>
                    <h1>Toppings</h1>
                    <span>1,50 each</span>
                    <span>Scoop total : $4.50</span>
                    <Options optionsType={"toppings"}/>
                </div>
                <div>
                    <h2>Grand total : $10,50</h2>
                </div>
            </OrderDetailsProvider>
        </div>
    );
};

export default OrderEntry;
