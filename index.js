const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct);

const app = express();


app.get('api/products', getProducts)
app.get('api/products/:id', getProduct)


app.get('api/products/' function(req, res){
    console.log(req.query)
    res.status(200).send(req.query.id)
})

app.listen(3334, () => console.log('server is listening to 3334'));

