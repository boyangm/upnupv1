const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json())
//db config
const dbk = require('./config/keys').mongoURI;
mongoose.connect(dbk, {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

 app.listen(PORT, () =>{
     console.log('listening on port', PORT);
 })


