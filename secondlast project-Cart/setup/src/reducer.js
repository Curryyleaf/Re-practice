const reducer = (state, action) => {
  if (action.type === "CLEAR-CART") {
    //  each time , instead of changing the original state , i am making a copy and completely creating a new one to reducer /state
    return { ...state, cart: [] };
    // If you were to write state.cart = [] directly without spreading the state, it would mutate the existing state, which is generally not recommended in React and Redux.

    //     Immutability is a core concept in React and Redux. It means that once an object (like a state object) is created, it cannot be changed. Instead of modifying the existing object, you create a new copy with the desired changes.F

    // Benefits:
    // Predictability: It makes it easier to predict the state at any given point in time.
    // Performance: Immutability helps with performance optimizations, as it simplifies change detection in React.
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
    //   here you cant do action.payload.id cuz id isnot object key but value
    };


  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {

      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return {...state , cart:tempCart}
  }

    if (action.type === "DECREASE") {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount -1 };
        }
        return cartItem;
      }).filter((items)=>items.amount !==0)
      return { ...state, cart: tempCart };
    }

if(action.type==='GET-TOTALS'){
  
  let {total , amount } = state.cart.reduce((cartTotal ,cartitem )=>{
   const {price, amount }=cartitem;
   cartTotal.amount+=amount;
   const itemTotal= price*amount ;
   cartTotal.total+= itemTotal;
  //  ASk why do we need to sperate into 2 
   return cartTotal;
  //  Ask how it is adding from all the items fo array of the cart 
  }, {
    total:0,
    amount:0
  });
  total=parseFloat(total.toFixed(2))
  // here we are changing the value with method and assignng back to it again 
  return {...state , total , amount }
}

if(action.type==='LOADING'){
  return{...state , loading:true}
  // Ask ehy it is not state.loading 
}

if(action.type==='DISPLAY_ITEMS'){
   return{...state , loading:false , cart:action.payload }
}
  return state;
  //   sp its a precationary smart way to make redux state even if none of the above code is executed
};

export default reducer;
