import products from './products';

let productName: string = products[0].name;

let product = products.filter(item => {
  if (item.name == productName) {
    return true;
  }
});

console.log(product);