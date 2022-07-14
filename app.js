const express = require("express");
const { fstat } = require("fs");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;


//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //for serving static files
app.use(express.urlencoded());

//PUG SPECIFIC CONFIGURATION
app.set('view engine', 'pug') //set the template engine pug
app.set('views', path.join(__dirname, 'views')) //set the views directory


//ENDPOINTS
app.get('/', (req, res)=>{
  const con = "Ths is the best content on the internet so far so use wisely.";
  const params = {'title': 'Aman is the good boy', "content": con};
  res.status(200).render('index.pug', params);
});

app.post('/', (req, res)=>{
  name = req.body.name
  age = req.body.age
  gender = req.body.gender
  address = req.body.address
  more = req.body.more
  let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`;
  fs.writeFileSync('output.txt', outputToWrite)
  const params = {'message': 'Your form has been submitted successfully'};
  res.status(200).render('index.pug', params);
});

//START THE SERVER
app.listen(port, ()=>{
  console.log(`The application started sucessfully on port ${port}`)
});