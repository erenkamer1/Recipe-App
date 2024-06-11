const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const port = process.env.port || 4040

/* const categoryRoute = require("./routes/category")
const productRoute = require("./routes/product") */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect with DB (database)
(async function connecting(){
    try {
        await mongoose.connect('mongodb://127.0.0.1/')
        console.log('Connected to the DB')
    } catch ( error ) {
        console.log('ERROR: Seems like your DB is not running, please start it up !!!');
    }
    })(); 


    // routes
  /*   app.use('/category', categoryRoute);
    app.use("/product" , productRoute) */

app.use(require("cors")());

app.listen(port , () => { console.log(`Serving on port: ${port}`) })