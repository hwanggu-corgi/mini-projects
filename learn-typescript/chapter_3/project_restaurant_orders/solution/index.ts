import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
let getMaxPrice = (price: PriceBracket) => {
  if (price == PriceBracket.Low) {
    return 10.0
  }

  if (price == PriceBracket.Medium) {
    return 20.0
  }

  if (price == PriceBracket.High) {
    return 30.0
  }
}

/// Add your getOrders() function below:
let GetOrderFunction = (price: PriceBracket, orders:Order) => Order;
getOrders: GetOrderFunction = (price: PriceBracket, orders: Order) => {

}

/// Add your printOrders() function below:

/// Main
// const elligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, elligibleOrders);
