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
import { addItem, minItem } from "../features/order";
import {formatter} from "../utilities";

const ItemCard = (props) => {
  const { stock, price, name, selected } = props.data.data;
  const itemId = props.data.id;
  const [addDisabled, setAddDisabled] = useState("");
  const [minDisabled, setMinDisabled] = useState("disabled");
  const [grayscale, setGrayscale] = useState("");
  const dispatch = useDispatch();

  const addNumber = () => {
    if (selected < stock) {
      dispatch(addTotalQuantity());
      dispatch(addTotalPrice({ price: price }));
      dispatch(addSelected({ id: itemId }));
      dispatch(addItem({ id: itemId, data: props.data }));
      setMinDisabled((state) => "");
    }
  };

  const minNumber = () => {
    if (selected > 0) {
      dispatch(minTotalQuantity());
      dispatch(minTotalPrice({ price: price }));
      dispatch(minSelected({ id: itemId }));
      dispatch(minItem({ id: itemId, data: props.data }));
    }
  };

  useEffect(() => {
    if (stock <= 0) {
      setAddDisabled((state) => "disabled");
    }
    if (stock <= selected) {
      setGrayscale((state) => "grayscale(100%)");
      setAddDisabled((state) => "disabled");
      setGrayscale((state) => "grayscale(100%)");
    }
    if (selected < stock) {
      setAddDisabled((state) => "");
      setGrayscale((state) => "");
    }
    if (selected === 0) {
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
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text">{formatter.format(price)}</p>
          <Counter
            limit={stock}
            number={selected}
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
