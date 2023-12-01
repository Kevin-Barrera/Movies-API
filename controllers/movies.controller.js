const Movie = require('../models/movie.model');

//Consultar todas las peliculas
exports.getMovies = async (req, res) => {
    try{
        const movies = await Movie.find();
        return res.status(200).json({
            message : "Peliculas OBTENIDAS con éxito",
            data: movies
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al consultar peliculas",
            data: error
        });
    }
}

//Consultar pelicula por ID
exports.getMoviesbyId = async (req, res) => {
    const movieId = req.params.movieId; //Acceder a los parametros
    try{
        const movie = await Movie.findById(movieId);
        return res.status(200).json({
            message: 'Pelicula OBTENIDA con éxito',
            data: movie
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al consultar pelicula por ID",
            data: error
        });
    }
}

//Nueva Pelicula
exports.newMovie = async (req, res) => {
    try{
        //Crear un nuevo permiso
        const {nombre_Pelicula,director,año,duracion,genero,img } = req.body;
        const newMovie = new Movie({nombre_Pelicula,director,año,duracion,genero,img});
        await newMovie.save();

        return res.status(200).json({
            message: 'Pelicula CREADA con éxito',
            data : newMovie
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al crear pelicula",
            data: error
        });
    }
}

//Actualizar Pelicula
exports.updateMovie = async (req, res) => {
    const movieId = req.params.movieId; //Acceder a los parametros
    const newData = req.body; //Acceder al body

    try{
        const updateMovie = await Movie.findByIdAndUpdate(movieId, newData, { new : true });    
        return res.status(201).json({
            message: 'ACTUALIZAR pelicula por ID',
            data : updateMovie
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al actualizar pelicula",
            data: error
        });
    }
}

//Eliminar pelicula
exports.deleteMovie = async (req, res) => {
    const movieId = req.params.movieId; //Acceder a los parametros

    try{
        await Movie.findByIdAndDelete(movieId);
        return res.status(201).json({
            message : "Pelicula eliminada con ID: " + movieId,
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al eliminar Pelicula",
            data: error
        });
    }
}