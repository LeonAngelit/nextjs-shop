import { useState, useEffect  } from "react";


  let initialState = {
    cart: [],
    productIDs: [],
    toggleModal: false,
    checkouts: [],
    selectedOrder: { selected: false, value: 0 },
    productSelected: false,
  };
  

const useInitialState = () => {



  const [state, setState] = useState(initialState);

  useEffect(()=>{
    if (JSON.parse(localStorage.getItem("state")).length > 0){
      const InLocalStorage = JSON.parse(localStorage.getItem("state"));
      setState({...state, ...InLocalStorage});
    }
  },[state]);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
      productIDs: [...state.productIDs, payload.id],
      modified: true,
    });
  };
  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      productIDs: state.productIDs.filter((el) => el !== state.cart[indexValue].id),
      cart: state.cart.filter((product, index) => index !== indexValue),
    });
  };

  const addCheckout = (checkout) => {
    setState({
      ...state,
      checkouts: [...state.checkouts, checkout],
      cart: [],
      productIDs: [],
    });
  };

  const setOrder = (order) => {
    console.log(order);
    setState({
      ...state,
      selectedOrder: { selected: true, value: order },
    });
  };

  const selectProduct = (product) => {
    setState({
      ...state,
      productSelected: product,
    });
  };

  const handleModal = () => {
    setState({
      ...state,
      toggleModal: !state.toggleModal,
    });
  };


  return {
    state,
    addToCart,
    removeFromCart,
    handleModal,
    addCheckout,
    setOrder,
    selectProduct,
  };
};

export default useInitialState;
