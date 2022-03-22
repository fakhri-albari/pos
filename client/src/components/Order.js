import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { resetItem } from "../features/item";
import { resetOrder } from "../features/order";
import { useDispatch } from "react-redux";
import formatter from "../utils";

const PaymentModal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-lg btn-dark h-100"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Payment
      </button>
      <div
        className="modal fade text-dark"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="staticBackdropLabel">
                Payment
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column mx-2">
              <div className="d-flex flex-row">
                <div className="d-flex flex-column w-50">
                  <small>Total</small>
                  <h3>Rp 10.000</h3>
                </div>
                <div className="d-flex flex-column w-50 text-end">
                  <small>Cashier</small>
                  <h3>Udin</h3>
                </div>
              </div>
              <br />
              <div className="d-flex flex-row">
                <div className="d-flex flex-column w-50 me-2">
                  <small className="mb-2">Money</small>
                  <div class="input-group mb-3">
                    <span class="input-group-text bg-white border-dark">
                      Rp
                    </span>
                    <input type="text" class="form-control border-dark" />
                  </div>
                </div>
                <div className="d-flex flex-column w-50 ms-2">
                  <small className="mb-2">Change</small>
                  <fieldset disabled>
                    <div class="input-group mb-3">
                      <span class="input-group-text bg-white border-0">Rp</span>
                      <input
                        type="text"
                        class="form-control border-0 bg-white"
                        value={"0,00"}
                      />
                    </div>
                  </fieldset>
                </div>
              </div>
              <br />
              <div>
                <button className="btn btn-sm btn-outline-dark me-2 mb-2">
                  10.000
                </button>
                <button className="btn btn-sm btn-outline-dark me-2 mb-2">
                  20.000
                </button>
                <button className="btn btn-sm btn-outline-dark me-2 mb-2">
                  50.000
                </button>
                <button className="btn btn-sm btn-outline-dark me-2 mb-2">
                  75.000
                </button>
                <button className="btn btn-sm btn-outline-dark me-2 mb-2">
                  100.000
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-dark w-25"
                data-bs-dismiss="modal"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const OrderDetailModal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-lg btn-outline-dark h-100 me-3"
        data-bs-toggle="modal"
        data-bs-target="#orderDetail"
      >
        Order Detail
      </button>
      <div className="modal text-dark" tabindex="-1" id="orderDetail">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content m-auto">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">Order Detail</h5>
            </div>
            <div className="modal-body">
              <div className="modal-body-scroll">
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col" className="ps-3">
                        No
                      </th>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="ps-3">
                        1
                      </th>
                      <td>Baso</td>
                      <td>10000</td>
                      <td>10</td>
                      <td>Rp 100000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Order = (props) => {
  const totalQuantity = useSelector((state) => state.order.totalQuantity);
  const totalPrice = useSelector((state) => state.order.totalPrice);
  const items = useSelector((state) => state.item);
  const dispatch = useDispatch();

  const result = () => {
    const arr = [];
    for (const item in items) {
      arr.push(<ItemCard key={item} data={{ id: item, data: items[item] }} />);
    }
    return arr;
  };

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
          <div className="row order-items p-3">{result()}</div>
        </div>
        <div className="p-3 order-footer bg-light text-white d-flex flex-row justify-content-evenly">
          <div className="h-100 w-100 text-dark d-flex justify-content-evenly align-items-center">
            <h3 className="my-0 ps-3 pe-5">{formatter.format(totalPrice)}</h3>
            <h3 className="my-0 ps-5">{totalQuantity} items</h3>
          </div>
          <div className="h-100 w-100 d-flex pe-3">
            <div className="my-auto w-100 tex-center d-flex justify-content-end">
              <OrderDetailModal />
              <PaymentModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
