const mongoose = require('mongoose');
const {Schema} = mongoose;

const connectionDb = () => mongoose.connect('mongodb://localhost:27017/Inmobiliaria');

const SchemaInmueble = new Schema(
{
    Operacion : String,
    Tipo : String,
    Direccion: String,
    Fotos: String,
    Ambientes: String,
    Metros: Number,
    Descripcion: String,
    Propietario: String 

});
const Inmueble = mongoose.model('Inmueble', SchemaInmueble);

module.exports = {
    Inmueble,
    connectionDb
}