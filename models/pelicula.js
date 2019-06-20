const mongoose = require('mongoose');

const PeliculaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  fechaLanzamiento: {
    type: Date,
    default: Date.now
  },
  genero: {
      type: String,
      required: true
  },
  precio:{
      type: Number,
      required: true
  }
});

const Pelicula = module.exports = mongoose.model('Pelicula', PeliculaSchema);

module.exports.getPeliculaById = function(id,callback){
  Pelicula.findById(id, callback);
}

module.exports.addPelicula = function(newPelicula,callback){
  newPelicula.save(callback);
}

module.exports.deletePelicula = function(id,callback){
  Pelicula.deleteOne({"_id":id},callback);
}

module.exports.editPelicula = function(id,editPelicula,callback){
  Pelicula.findOneAndUpdate({"_id":id},editPelicula,callback);
}