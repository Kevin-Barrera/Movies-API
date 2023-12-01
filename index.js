const express = require('express');
const morgan = require('morgan');
require('./utils/mongoConnection');

const moviesRouter = require('./routers/movies.router');
const userRouter = require('./routers/users.router');

const app = express();
const port = 3003;

app.use(morgan('dev')); //Muestra en consola el método que está siendo usado

app.get("/", (req, res) => {
    res.send("Bienvenido a movies API por Kevin Barrera");
})

app.use(express.json({limit: '50mb'})); // Especificar que express puede usar JSON de hasta 50MB


app.use('/movies', moviesRouter);
app.use('/users', userRouter);

app.listen(port, ()=> {
    console.log(`Servidor iniciado en http://localhost:${port}`);
})