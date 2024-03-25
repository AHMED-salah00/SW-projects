const express = require('express')
const server = express()
const port = 3030 // port  that the server will be working on

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.get('/products/food', async (req, res) => {
    // BE -> DB fetch food products -> organize fields / clean up data before responding
    // Fetch products: (via dummyjson)
    const response = await fetch('https://dummyjson.com/products');
    const productsData = await response. json();
    
    const products = productsData.products.map((product) => ({
    name: product.title,
    price: product.price,
    url: product.thumbnail,}));

    console. log(products[0]);

    res.send(products)
})

server.listen(port, () => {
  console.log(`Server started at port ${port}`)
})