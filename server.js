//Dependencies
const express = require('express');
const app = express();
const PORT = 3000
const Budget = require('./models/budget.js');

//EJS Dependencies
app.set('view engine', 'ejs');
app.use(express.json());

//Static
app.use(express.static('public'));
app.use(express.urlencoded({ extended:false }));

//Index.EJS Route
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {Budget});
  });

//Create a new budget item
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs');
});

////POST, unshift command helps with adding a budget item to the beginning of the budget array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

app.post('/budgets', (req, res) => {
    const newBudgetItem = {
      date: req.body.date,
      name: req.body.name,
      from: req.body.from,
      amount: Number(req.body.amount),
      tags: req.body.tags.split(',')
    };
    Budget.push(newBudgetItem);
    res.redirect('/budgets');
  });
  
//Show route, details of a specific budget item
app.get('/budgets/:index', (req, res) => {
    const budgetItem = Budget[req.params.index];
    res.render('show.ejs', { budgetItem });
});
//Example, type in: "http://localhost:3000/budgets/0" in the URL

//PORT
app.listen(3000, () => {
    console.log('Server listening on PORT 3000')
})


