
 export const initialState = {
     basket: [],
     user: null,
     

 }



 //getting total in the basket
//use selector  
 export const getTotal = (basket) =>
 //reduce function iterates through the basket and add it
    basket?.reduce((amount,item) => item.price + amount, 0); 

 const reducer = (state, action) => {
    
     switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
              

            };

        case 'REMOVE_FROM_BASKET':
            //can't apply filter as it will remove all the products with the same id
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id == action.id
            );
            
            
            let nBasket = [...state.basket];
            if (index >=0) {
                nBasket.splice(index,1); //remove the element at index and return the modified array

            }
            else {
                console.warn(
                    'Cant remove product (id: ${action.id} as its not in basket!'
                    
                )
            }

          
            return {
                ...state,
                basket: nBasket,
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

        case 'EMPTY_THE_BASKET':
            return {
                ...state,
                basket: [],
                
            }


        default:
            return state;
     }
 };


 export default reducer;