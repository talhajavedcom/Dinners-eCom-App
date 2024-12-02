import express from 'express'
// import dotenv from 'dotenv'
import {dbConnection} from './config/db.js'
import products from './config/Products.js'
import cors from 'cors'

dbConnection()
// dotenv.config()

const app = express()
app.use(express.json()); // Add this line to parse JSON in the request body
app.use(cors())
app.get('/', (req, res) => {
  res.send('hello')
})

// router addProducts /method post
app.post('/add-product', async (req, res) => {
 
    let data = new products(req.body);
    let result = await data.save();
    res.send(result);
});

const PORT = 5000
app.listen(PORT, () => {
  console.log('server is running on port')
})
