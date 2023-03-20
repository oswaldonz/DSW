import * as mongoose from 'mongoose';

//Education

const carrerasSchema  = new mongoose.Schema({
  IdCarreraPK : { type : Number, required : true },
  IdCarreraOK : { type : String, required : true },
  IdCarreraBK  : { type : String, required : true },
  DesCarrera       : { type : String, required : false },
  NombreCorto       : { type : String, required : false },
  Alias         : { type : String, required : false },
  Creditos     : { type : Number, required : false },
  FechaInicial : { type : Date, required : false },
  FechaFinal   : { type : Date, required : false },
  IdInstitutoOK : { type : String, required : false },
  IdInstitutoBK : { type : String, required : false },
  IdDivisionOK : { type : String, required : false },
  IdDivisionBK: { type : String, required : false },
  IdTipoGradoAcademicoOK : { type : String, required : false },
  IdGradoAcademicoOK : { type : String, required : false },
  GradoAcademico : { type : String, required : false },
  cat_carreras_estatus : { type : Array, required : false },
  detail_row : { type : Object, required : false },
  cat_carreras_programas : { type : Array, required : false },
});


//Education

export default mongoose.model(
    'cat_carreras',
    carrerasSchema,
    'cat_carreras'
);
