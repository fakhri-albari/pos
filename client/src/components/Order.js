import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { resetItem } from "../features/item";
import { resetOrder } from "../features/order";
import { useDispatch } from "react-redux";

const Order = (props) => {
  const totalQuantity = useSelector((state) => state.order.totalQuantity);
  const totalPrice = useSelector((state) => state.order.totalPrice);
  const items = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const result = items.map((item) => (
    <ItemCard
      key={item.id}
      itemId={item.id}
      itemName={item.name}
      itemPrice={item.price}
      itemStock={item.stock}
      itemSelected={item.selected}
    />
  ));

  const onReset = () => {
    dispatch(resetItem());
    dispatch(resetOrder());
  };

  return (
    <>
      <div className="d-flex flex-column order-container h-100">
        <div className="d-flex bg-light order-header">
          <div className="py-3 ps-4 d-flex flex-row w-100">
            <button className="btn btn-outline-dark me-2 h-100">Button</button>
            <button className="btn btn-outline-dark me-2 h-100">Button</button>
            <button className="btn btn-outline-dark me-2 h-100">Button</button>
          </div>
          <div className="py-3 pe-4 d-flex flex-row w-50">
            <button className="me-3 btn btn-dark h-100" onClick={onReset}>
              Reset
            </button>
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue="1"
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="order-body bg-white p-3">
          <div className="row order-items p-3">{result}</div>
        </div>
        <div className="p-3 order-footer bg-dark text-white d-flex flex-row justify-content-evenly">
          <div className="my-auto w-25 text-center d-flex justify-content-start">
            <h2 className="my-auto">{totalQuantity}</h2>
          </div>
          <div className="my-auto w-25 text-center">
            <h4 className="d-inline-block me-3">Rp</h4>
            <h2 className="my-auto d-inline-block">{totalPrice}</h2>
          </div>
          <div className="my-auto w-25 tex-center d-flex justify-content-end">
            <button className="btn-lg btn-light my-auto">Button</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
