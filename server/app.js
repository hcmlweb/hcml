


require('dotenv').config(); 
const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());




const expanceRouter = require('./router/expanceRouter')
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


app.use('/api/expanse', expanceRouter)




app.use((req,res,next)=>{ 
res.send('Page Finding')
})

app.listen(PORT,()=>{
  console.log(`Server is running at ${PORT}`)
})

module.exports=app;
