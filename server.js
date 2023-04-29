//Dependencies
const express = require('express');
const app = express();
const PORT = 3000;
const budget = require('./models/budget.js');


//EJS Dependencies
app.set('view engine', 'ejs');
app.use(express.json());


//Index.EJS Route
app.get('/', (req, res) => {
    res.render('index.ejs', {budget})
});


//Port 
app.listen(PORT, () => {
    console.log('Server is listening to PORT 3000 ${PORT}')
});