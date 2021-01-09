import products from './products';

let productName: string = products[0].name;

let product = products.find(item => {
  if (item.name == productName) {
    return true;
  }
});

console.log(Boolean(product.preOrder));
if (Boolean(product.preOrder) == true) {
  console.log("we’ll send a message when it’s on the way");
}