const express = require('express'); //Importar express
const router = express.Router();    //Importar router
const moviesController = require('../controllers/movies.controller'); //Importar controlador de movies
const authMiddleware = require('../utils/auth.middleware');

router.get('/', moviesController.getMovies);

router.get('/:movieId', moviesController.getMoviesbyId);

router.post('/', authMiddleware.authenticateToken, moviesController.newMovie);

router.put('/:movieId', authMiddleware.authenticateToken,moviesController.updateMovie);

router.delete('/:movieId', authMiddleware.authenticateToken,moviesController.deleteMovie);

module.exports = router;