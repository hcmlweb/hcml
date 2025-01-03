


require('dotenv').config(); 
const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const expanceRouter = require('./router/expanceRouter')
const griegeRouter=require('./router/griege.router')




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());







mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


app.get('/',(req,res)=>{
  res.status(201).send('Welcome to HCML')
})
app.use('/api/expanse', expanceRouter)
app.use('/api/griege', griegeRouter)




app.use((req,res,next)=>{ 
res.send('Page Finding')
})

app.listen(PORT,()=>{
  console.log(`Server is running at ${PORT}`)
})

module.exports=app;
