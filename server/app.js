


require('dotenv').config(); 
const express = require('express')
const cors=require('cors')
const app=express()

const PORT = process.env.PORT || 4001;
const MONGO_URI = process.env.MONGO_URI;




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin:'http://localhost:5173',
  methods:['GET','POST']
}));




const expanceRouter = require('./router/expanceRouter')
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));



  app.listen(PORT,()=>{
      console.log(`Server is running at ${PORT}`)
  })



app.use('/api/expance', expanceRouter)




app.use((req,res,next)=>{ 
res.send('404 not found')
})


module.exports=app;