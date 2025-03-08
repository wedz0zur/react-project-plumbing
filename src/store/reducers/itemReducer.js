
export const initialState = {
  
  catalog: [],
};


export function itemReducer(state = initialState, action){
  switch(action.type){
    case "ADD_MANY_PRODUCTS":
      return { ...state, catalog: [...action.payload] };
      default:
          return state;
  }
}

export const addManyProducts = (payload) => ({type: "ADD_MANY_PRODUCTS", payload});


