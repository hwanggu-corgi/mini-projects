import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
let getMaxPrice = (price: PriceBracket) => {
  if (price == PriceBracket.Low) {
    return 10.0
  } else if (price == PriceBracket.Medium) {
    return 20.0
  } else {
    return 30.0
  }
}

/// Add your getOrders() function below:
let getOrders: (price: PriceBracket, orders: Order[][]) => Order[][] = function(price: PriceBracket, orders: Order[][]) {
    let filteredOrders: Order[][] = [];

    orders.forEach(order => {
      filteredOrders.push(order.filter(order => order.price <= getMaxPrice(price)));
    });

    return filteredOrders;
}

/// Add your printOrders() function below:

/// Main
// const elligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, elligibleOrders);
