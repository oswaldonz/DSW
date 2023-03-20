import * as mongoose from 'mongoose';

const periodosSchema  = new mongoose.Schema({
    IdPeriodoPK: { type : String, required : true },
    IdPeriodoOK: { type : String},
    IdPeriodoBK: { type : String},
    IdInstitutoOK: { type : Number},
    DesPeriodo: { type : String},
    NombreCorto: { type : String},
    IdTipoCicloOK: { type : String},
    IdClicloOK: { type : String},
    Ciclo: { type : String},
    Año: { type : Number},
    NumPeriodo: { type : String},
    IdTipoGradoAcaOK: { type : String},
    IdGradoAcaOK: { type : String},
    GradoAca: { type : String},
    IdTipoModalidadOK: { type : String},
    IdModalidadOK: { type : String},
    Modalidad: { type : String},
    cat_periodos_estatus: { type : Array},
    detail_row: { type : Object},
    FechaInicial: { type : Date},
    FechaFinal: { type : Date},
});

  //Education
  
  export default mongoose.model(
    'cat_periodos',
    periodosSchema,
    'cat_periodos'
);