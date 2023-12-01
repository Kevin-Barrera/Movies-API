const mongoose = require('mongoose');
                                //USER  //PASSWORD                                  //BD
mongoose.connect('mongodb+srv://root:evw9PmZ7MWluabIJ@cluster0.mrzgauh.mongodb.net/movies-db?retryWrites=true&w=majority'
).then(() => console.log('Conexion exitosa a MongoDB'))
.catch(err => console.log('Error al conectar a MongoDB: ', err));

module.exports = mongoose;