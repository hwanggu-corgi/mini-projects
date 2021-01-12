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
let getOrders = (price: PriceBracket, orders: Order) => {
    let filteredOrder: Order[][] = [];

    orders[0].filter(order => order.price < getMaxPrice(price));
}

/// Add your printOrders() function below:

/// Main
// const elligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, elligibleOrders);
