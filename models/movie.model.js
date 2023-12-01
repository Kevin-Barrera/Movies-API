const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    nombre_Pelicula: {type: String},
    director: {type: String},
    año: {type: Number},
    duracion: {type: Number},
    genero: {type: String},
    img: {type: String},
});

module.exports = mongoose.model('Movie', movieSchema, 'movie');


