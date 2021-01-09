import products from './products';

let productName: string = products[3].name;
let shipping: number;
let shippingAddress: string = "123 Springfield Avenue";
let taxPercent: number;
let taxTotal: number;
let total: number;

let product = products.filter(item => {
  if (item.name == productName) {
    return true;
  }
})[0];

if (Number(product.price) >= 25) {
  console.log("Free shipping being provided");
  shipping = 0;
} else {
  shipping = 5;
}

if (product.preOrder == 'true') {
  console.log("we’ll send a message when it’s on the way");
}