import express, { Route } from 'express';

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse
app.use(express.urlencoded({extended:true}));

// Serve static files from the publuc folder
app.use(express.static('public'));

// Custom logging middleware
app.use((req, res, next) => {
   console.log(`${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`);
   next()
}
)

//Home route
app.get('/', (req, res) => {
    res.render('home');
});

// About route
app.get('/about', (req, res) => {
    res.render('about');
});

// Route with parameter
app.get('/user/:name', (req, res) => {
    const name = req.params.name
    res.render('user', {name});
});

// POST route for contact form
app.post('/contact', (req, res) => {
    console.log(req.body);
    res.send('Message Received');

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});
