import { useState} from "react";
import { useEffect } from "react";


  let initialState = {
    cart: [],
    productIDs: [],
    checkouts: [],
    selectedOrder: { selected: false, value: 0 },
    productSelected: false,
  };
  

const useInitialState = () => {
  function getState(){
    if(window.localStorage.getItem('state') !== null){
      initialState = JSON.parse(window.localStorage.getItem('state'));
    }

    return initialState;
  };


  const [state, setState] = useState(initialState);

  useEffect(()=>{
    setState(getState())
  },[])


  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
      productIDs: [...state.productIDs, payload.id],
      modified: true,
    });
    window.localStorage.setItem('state', JSON.stringify(state))
  };
  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      productIDs: state.productIDs.filter((el) => el !== state.cart[indexValue].id),
      cart: state.cart.filter((product, index) => index !== indexValue),
    });
    window.localStorage.setItem('state', JSON.stringify(state))
  };

  const addCheckout = (checkout) => {
    setState({
      ...state,
      checkouts: [...state.checkouts, checkout],
      cart: [],
      productIDs: [],
    });
    window.localStorage.setItem('state', JSON.stringify(state))
  };

  const setOrder = (order) => {
    console.log(order);
    setState({
      ...state,
      selectedOrder: { selected: true, value: order },
    });
    window.localStorage.setItem('state', JSON.stringify(state))
  };

  const selectProduct = (product) => {
    setState({
      ...state,
      productSelected: product,
    });
    window.localStorage.setItem('state', JSON.stringify(state));
  
  };



  return {
    state,
    addToCart,
    removeFromCart,
    addCheckout,
    setOrder,
    selectProduct,
  };
};

export default useInitialState;
