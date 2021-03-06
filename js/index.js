// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  //... your code goes here
  let priceValue = Number(price.innerHTML);

  let quantityValue = quantity.value;

  const getTotalValue = priceValue * quantityValue;

  const subtotalValue = product.querySelector('.subtotal span');

  subtotalValue.innerHTML = getTotalValue

  return getTotalValue
}

function calculateAll() {

  const allProductsCollection = document.getElementsByClassName('product');

  const allProdArray = [...allProductsCollection]

   allProdArray.forEach((product) => {
    updateSubtotal(product)
  });




let reduceArray = allProdArray.reduce((acc, index) =>{
  return acc + updateSubtotal(index)
}, 0)

let totalValue = document.getElementById('total-value')
totalValue.innerHTML = "Total: $" + reduceArray
}
 //const sumTotal =  subTotalArr.reduce((acc, index)=>{
    //return acc + index
  //}, 0);

//let totalValue = document.getElementById('total-value')

//totalValue = sumTotal

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  //}

  // ITERATION 4

  // function removeProduct(event) {
  //   const target = event.currentTarget;
  //   console.log('The target in remove is:', target);
  //   //... your code goes here
  // }

  // // ITERATION 5

  // function createProduct() {
  //   //... your code goes here
  // }

  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  });
