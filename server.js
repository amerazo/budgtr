//Dependencies
const express = require('express');
const app = express();
const PORT = 3000
const budget = require('./models/budget.js');


//EJS Dependencies
app.set('view engine', 'ejs');
app.use(express.json());

//Static
app.use(express.static('public'));
app.use(express.urlencoded({ extended:false }));


//Index.EJS Route
app.get('/', (req, res) => {
    res.render('index.ejs', {budget})
});

//New Route
app.get('/new', (req, res) => {
    res.render('new.ejs')
})


//Port 
app.listen(3000, () => {
    console.log('Server listening on PORT 3000')
})