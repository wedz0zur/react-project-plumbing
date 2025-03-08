const initialCartState = {
  items: [],
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          items: updatedItems,
        };
      } else {
        
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.payload, quantity: 1 },
          ],
        };
      }

    case "REMOVE_FROM_CART":
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove.quantity > 1) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
      case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
    
      
  }
  
};

export default cartReducer;
