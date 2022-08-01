import { useState } from "react";
import { useEffect } from "react";

let initialState = {
  cart: [],
  productIDs: [],
  checkouts: [],
  selectedOrder: { selected: false, value: 0 },
  productSelected: false,
  userLoggedIn: false,
  checked: false,
};

const useInitialState = () => {
  function getState() {
    if (window.localStorage.getItem("state") !== null) {
      initialState = JSON.parse(window.localStorage.getItem("state"));
    }
    return initialState;
  }

  function updateState(element) {
    window.localStorage.setItem("state", JSON.stringify(element));
  }

  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    state = {
      ...state,
      cart: [...state.cart, payload],
      productIDs: [...state.productIDs, payload.id],
      modified: true,
    };
    updateState(state);
    setState(state);
  };

  const removeFromCart = (indexValue) => {
    state = {
      ...state,
      productIDs: state.productIDs.filter((el) => el !== state.cart[indexValue].id),
      cart: state.cart.filter((product, index) => index !== indexValue),
    };
    updateState(state);
    setState(state);
  };

  const addCheckout = (checkout) => {
    state = {
      ...state,
      checkouts: [...state.checkouts, checkout],
      cart: [],
      productIDs: [],
    };
    updateState(state);
    setState(state);
  };

  const setOrder = (order) => {
    state = {
      ...state,
      selectedOrder: { selected: true, value: order },
    };
    updateState(state);
    setState(state);
  };

  const updateChecked = (checked) => {
    state = {
      ...state,
      checked: checked,
    };
    setState(state);
    updateState(state);
  };

  const selectProduct = (product) => {
    state = {
      ...state,
      productSelected: product,
    };
    updateState(state);
    setState(state);
  };

  useEffect(() => setState(getState()), []);

  return {
    state,
    addToCart,
    removeFromCart,
    addCheckout,
    setOrder,
    selectProduct,
    updateChecked,
  };
};

export default useInitialState;
