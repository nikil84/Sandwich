# sandwich-order

## Features
 -  Place Order
 -  view Orders
 
## Place Order
 - display all ingredients information
 - choose required amount of ingredients
    - dispatch action  "ADD_INGREDIENT" if more button pressed against ingredient 
    - dispatch action  "REMOVE_INGREDIENT" if less button pressed against ingredient
 - press "Order" button to place order
    - dispatch action "ADD_ORDER" to store order information in redux store
 - Modal pop-up shows Ingredients information and total price 
 - Upon pressing on Continue order will be placed
 
## view orders
  - select orders link in top navigation link
  -  displays open and picked up orders information in cards 
      - Order information will be fetched from Redux store (In real time, we will be calling back end API to get placed order information)
  - If user presses "Picked up" buttom on Open order , action will be dispatched to change status of order
  
 ##  Things Used 
   - React
   - Redux 
   - CSS 
   - React Router
   - React Hooks
