import products from './products';

let productName: string = products[0].name;

let product = products.filter(item => {
  if (item.name == productName) {
    return true;
  }
})[0];

if (Boolean(product.preOrder) == true) {
  console.log("we’ll send a message when it’s on the way");
}