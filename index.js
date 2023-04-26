const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.port ||5000;

const catagories = require('./Data/catagories.json')
const news = require('./Data/news.json')

app.use(cors())


app.get('/',(req,res)=>{
  res.send('Dragon is running')
})

app.get('/catagories',(req,res)=>{
  res.send(catagories)
})
//All News Here
app.get('/news',(req,res)=>{
  res.send(news)
})

//specific News
app.get('/news/:id',(req,res)=>{
const id = req.params.id
console.log(id)
const selectedNews = news.find(n=>n._id === id)
res.send(selectedNews);
})

//Category News 
app.get('/catagories/:id',(req,res)=>{
  const id = parseInt(req.params.id)
  console.log(id)
  if(id===0){
    res.send(news)
  }
  else{
  const categoryNews = news.filter(n=> parseInt(n.category_id) === id)
  res.send(categoryNews)
}
})


app.listen(port,()=>{
  console.log(`Dragon Api Is Running ${port}`)
})