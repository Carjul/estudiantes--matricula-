const mongoose = require('mongoose');

const {Schema, model,connect } = mongoose;

connect('mongodb+srv://carlos:12345@cluster0.losq7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(db => console.log('db  esta conectado'))
.catch(err => console.error(err))

var schema = new Schema({
 
    identificacion: Number,
    nombre: String,
    apellido: String,
    fecha_nacimiento: String,
    edad: Number,
    direccion: String,
    data_escolar: {
      ultimo_grado: Number,
      materia_preferida: String,
      ultimo_promedio:Number
    },
    data_acudiente: {
      nombre: String,
      apellido: String,
      parentesco: String,
      celular1: Number,
      celular2: Number
    },
    data_medicos: {
      tipo_sangre:String,
      alergico_a: String,
      alergico_b: String,
      padece_enfermedad: String,
      nombre_enfermedad: String
    }
 
  });
  
  
  module.exports = model("estudiantes", schema);