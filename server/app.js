
const express = require('express')
const cors=require('cors')
const app=express()
const expanceRouter = require('./router/expanceRouter')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin:'http://localhost:5173',
  methods:['GET','POST']
}));

app.use('/api/expance', expanceRouter)




app.use((req,res,next)=>{ 
res.send('404 not found')
})


module.exports=app;