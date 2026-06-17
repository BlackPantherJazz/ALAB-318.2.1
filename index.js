import express, { Route } from 'express';

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse
app.use(express.urlencoded({extended:true}));

// Serve static files from the publuc folder
app.use(express.static('public'));

//Home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});
