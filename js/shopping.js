const cartArray = [];

function displayCart(carrtProduct) {
    console.log(carrtProduct)

    const tableBody = document.getElementById('products-cart');

    for (let i = 0; i < carrtProduct.length; i++) {
        console.log(cartArray[i].productName, cartArray[i].productPrice)

        const productName = cartArray[i].productName;
        const productPrice = cartArray[i].productPrice;


    }
}

function addToCart(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText)
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText)

    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;


    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    };
    cartArray.push(productObj);

    // console.log(cartArray)
    // console.log(cartArray.length)

    document.getElementById('total-products').innerText = cartArray.length;

    displayCart(cartArray)
}

