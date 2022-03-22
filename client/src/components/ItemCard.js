import Counter from "./Counter";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  minTotalQuantity,
  addTotalQuantity,
  addTotalPrice,
  minTotalPrice,
} from "../features/order";
import { addSelected, minSelected } from "../features/item";

const ItemCard = ({ itemId, itemStock, itemPrice, itemName, itemSelected }) => {
  const [addDisabled, setAddDisabled] = useState("");
  const [minDisabled, setMinDisabled] = useState("disabled");
  const [grayscale, setGrayscale] = useState("");
  const dispatch = useDispatch();

  const addNumber = () => {
    if (itemSelected < itemStock) {
      dispatch(addTotalQuantity());
      dispatch(addTotalPrice({ price: itemPrice }));
      dispatch(addSelected({ id: itemId }));
      setMinDisabled((state) => "");
    }
  };

  const minNumber = () => {
    if (itemSelected > 0) {
      dispatch(minTotalQuantity());
      dispatch(minTotalPrice({ price: itemPrice }));
      dispatch(minSelected({ id: itemId }));
    }
  };

  useEffect(() => {
    if (itemStock <= 0) {
      setAddDisabled((state) => "disabled");
    }
    if (itemStock <= itemSelected) {
      setGrayscale((state) => "grayscale(100%)");
      setAddDisabled((state) => "disabled");
      setGrayscale((state) => "grayscale(100%)");
    }
    if (itemSelected < itemStock) {
      setAddDisabled((state) => "");
      setGrayscale((state) => "");
    }
    if (itemSelected === 0) {
      setMinDisabled((state) => "disabled");
    }
  });

  return (
    <div className="col-3">
      <div className="card order-card">
        <img
          src="./food.png"
          className="item-img w-100"
          alt="item"
          style={{ filter: grayscale }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{itemName}</h5>
          <p className="card-text">Rp {itemPrice}</p>
          <Counter
            limit={itemStock}
            number={itemSelected}
            minNumber={minNumber}
            addNumber={addNumber}
            addDisabled={addDisabled}
            minDisabled={minDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
