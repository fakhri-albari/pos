import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { resetItem, setItem } from "../features/item";
import { resetOrder } from "../features/order";
import {
  changeMenu,
  changeFilterAvailableStock,
  changeDateHistory,
} from "../features/setting";
import { useDispatch } from "react-redux";
import { formatter } from "../utilities";
import { useEffect, useState } from "react";
import axios from "axios";

const PaymentModal = () => {
  const [money, setMoney] = useState(0);
  const [change, setChange] = useState(0);
  const [disable, setDisable] = useState(true);
  const userName = useSelector((state) => state.user.name);
  const totalPrice = useSelector((state) => state.order.totalPrice);
  const totalQuantity = useSelector((state) => state.order.totalQuantity);
  const itemAdded = useSelector((state) => state.order.itemAdded);

  const onMoneyInput = (e) => {
    setMoney(e.target.value);
    if (totalPrice <= e.target.value) {
      setChange(e.target.value - totalPrice);
      console.log("change");
    } else {
      setChange(0);
      console.log("0");
    }
  };

  const createPayment = async () => {
    const DATE = new Date();
    const items = [];
    const keys = Object.keys(itemAdded);
    keys.map((key) => {
      const { name, price, selected } = itemAdded[key];
      items.push({
        item_id: key,
        quantity: selected,
        price: price,
        total: price * selected,
      });
    });

    console.log(items);
    const date =
      DATE.getFullYear() + "-" + DATE.getMonth() + "-" + DATE.getDate();
    const payload = {
      order: {
        date: date,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
        user: "623787e9084fde7e6da1a666",
      },
      orderDetail: items,
    };
    console.log(payload);
    // await axios.post("http://localhost:5000/order", payload, {
    //   headers: {
    //     "content-type": "text/json",
    //   },
    // });
  };

  useEffect(() => {
    setMoney(0);
    setChange(0);
  }, [totalPrice]);

  useEffect(() => {
    if (money >= totalPrice) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [money, totalPrice]);

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
        tabIndex="-1"
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
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column mx-2">
              <div className="d-flex flex-row">
                <div className="d-flex flex-column w-50">
                  <small>Total</small>
                  <h3>{formatter.format(totalPrice)}</h3>
                </div>
                <div className="d-flex flex-column w-50 text-end">
                  <small>Cashier</small>
                  <h3>{userName}</h3>
                </div>
              </div>
              <br />
              <div className="d-flex flex-row">
                <div className="d-flex flex-column w-50 me-2">
                  <small className="mb-2">Money</small>
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white border-dark">
                      Rp
                    </span>
                    <input
                      type="text"
                      className="form-control border-dark"
                      value={money}
                      onChange={onMoneyInput}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column w-50 ms-2">
                  <small className="mb-2">Change</small>
                  <fieldset disabled>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-white border-0">
                        Rp
                      </span>
                      <input
                        type="text"
                        className="form-control border-0 bg-white"
                        value={change}
                        readOnly={true}
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
                onClick={createPayment}
                disabled={disable}
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
      <div className="modal text-dark" tabIndex="-1" id="orderDetail">
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

const UpdateItemModal = (props) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Update
      </button>
      <div
        className="modal fade text-dark"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="staticBackdropLabel">
                Update Item
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column mx-2">
              <div className="mb-3">
                <small>Name</small>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <small>Price</small>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <small>Stock</small>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-dark w-25"
                data-bs-dismiss="modal"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DatePicker = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.setting.filter.dateHistory);
  return (
    <input
      type="date"
      className="form-control w-25"
      onChange={(e) => {
        dispatch(changeDateHistory({ date: e.target.value }));
      }}
      value={date}
    />
  );
};

const OrderHistory = () => {
  const renderOrderHistory = () => {
    const arr = [];
    const display = (i) => (
      <tr key={i}>
        <th scope="row">i</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    );
    for (let i = 0; i < 30; i++) {
      arr.push(display(i));
    }
    return arr;
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>{renderOrderHistory()}</tbody>
      </table>
    </>
  );
};

const SelectMenu = () => {
  const menu = useSelector((state) => state.setting.menu);
  const dispatch = useDispatch();
  return (
    <>
      <select
        className="form-select select-menu"
        aria-label="Default select example"
        defaultValue={menu}
        onChange={(event) => dispatch(changeMenu({ menu: event.target.value }))}
      >
        <option value="order">Order</option>
        <option value="history">History</option>
        <option value="item">Item</option>
      </select>
    </>
  );
};

const ItemUpdate = () => {
  const renderItemUpdate = () => {
    const arr = [];
    const display = (i) => (
      <tr key={i}>
        <th scope="row">{i}</th>
        <td>Baso</td>
        <td>10000</td>
        <td>
          <h4 className="text-danger">10</h4>
        </td>
        <td>
          <UpdateItemModal />
        </td>
      </tr>
    );
    for (let i = 0; i < 30; i++) {
      arr.push(display(i));
    }
    return arr;
  };
  return (
    <>
      <div className="d-flex h-100">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{renderItemUpdate()}</tbody>
        </table>
      </div>
    </>
  );
};

const ButtonToggleAvailability = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.setting.filter.availableStock);
  const onClick = () => dispatch(changeFilterAvailableStock());

  if (status) {
    return (
      <button className="btn btn-dark me-2 h-100" onClick={onClick}>
        Available Stock
      </button>
    );
  }
  return (
    <button className="btn btn-outline-dark me-2 h-100" onClick={onClick}>
      Available Stock
    </button>
  );
};

const Order = (props) => {
  const totalQuantity = useSelector((state) => state.order.totalQuantity);
  const totalPrice = useSelector((state) => state.order.totalPrice);
  const items = useSelector((state) => state.item);
  const menu = useSelector((state) => state.setting.menu);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (menu == "order") {
      try {
        const result = await axios.get("http://localhost:5000/item");
        if (result) {
          const items = {};
          result.data.map(({ _id, name, price, stock, img }) => {
            items[_id] = {
              name,
              price,
              stock,
              img,
              selected: 0,
            };
          });
          dispatch(setItem(items));
        }
      } catch (error) {
        console.log(error);
        alert("Something Error");
      }
    }
  }, [menu]);

  const renderBody = () => {
    switch (menu) {
      case "order":
        const arr = [];
        for (const item in items) {
          arr.push(
            <ItemCard key={item} data={{ id: item, data: items[item] }} />
          );
        }
        return (
          <div className="order-body bg-white p-3">
            <div className="row order-items p-3">{arr}</div>
          </div>
        );
      case "history":
        return (
          <>
            <div className="history-body bg-white mb-3 p-3">
              <div className="row order-items p-3">
                <OrderHistory />
              </div>
            </div>
          </>
        );
      case "item":
        return (
          <>
            <div className="item-body bg-white mb-3 p-3">
              <div className="row order-items p-3">
                <ItemUpdate />
              </div>
            </div>
          </>
        );
    }
  };

  const renderFooter = () => {
    switch (menu) {
      case "order":
        return (
          <>
            <div className="p-3 order-footer bg-light text-white d-flex flex-row justify-content-evenly">
              <div className="h-100 w-100 text-dark d-flex justify-content-evenly align-items-center">
                <h3 className="my-0 ps-3 pe-5">
                  {formatter.format(totalPrice)}
                </h3>
                <h3 className="my-0 ps-5">{totalQuantity} items</h3>
              </div>
              <div className="h-100 w-100 d-flex pe-3">
                <div className="my-auto w-100 tex-center d-flex justify-content-end">
                  <OrderDetailModal />
                  <PaymentModal />
                </div>
              </div>
            </div>
          </>
        );
      default:
        break;
    }
  };

  const renderHeader = () => {
    switch (menu) {
      case "order":
        return (
          <>
            <div className="py-3 ps-4 d-flex flex-row w-100">
              <ButtonToggleAvailability />
            </div>
            <div className="py-3 pe-4 d-flex flex-row justify-content-end w-50">
              <button className="me-3 btn btn-dark h-100" onClick={onReset}>
                Reset
              </button>
              <SelectMenu />
            </div>
          </>
        );
      case "history":
        return (
          <>
            <div className="py-3 ps-4 d-flex flex-row w-100">
              <DatePicker />
            </div>
            <div className="py-3 pe-4 d-flex flex-row w-50 justify-content-end">
              <SelectMenu />
            </div>
          </>
        );
      case "item":
        return (
          <>
            <div className="py-3 ps-4 d-flex flex-row w-100"></div>
            <div className="py-3 pe-4 d-flex flex-row w-50 justify-content-end">
              <SelectMenu />
            </div>
          </>
        );
    }
  };

  const onReset = () => {
    dispatch(resetItem());
    dispatch(resetOrder());
  };

  return (
    <>
      <div className="d-flex flex-column order-container h-100">
        <div className="d-flex bg-light order-header">{renderHeader()}</div>
        {renderBody()}
        {renderFooter()}
      </div>
    </>
  );
};

export default Order;
