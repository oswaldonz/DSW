import * as mongoose from 'mongoose';

const gruposSchema  = new mongoose.Schema({
    IdGrupoPK: { type : Number, required : true },
    IdGrupoOK: { type : String},
    IdGrupoBK: { type : String},
    IdPeriodoOK: { type : String},
    IdInstitutoOK: { type : String},
    IdCarreraOK: { type : String},
    IdProgramaOK: { type : String},
    IdReticulaOK: { type : String},
    IdAsignaturaOK: { type : String},
    IdPersonaOK: { type : String},
    IdRolOK: { type : String},
    Grupo: { type : String},
    Capacidad: { type : String},
    IdTipoCursoOK: { type : String},
    IdCursoOK: { type : String},
    Curso: { type : String},
    TipoGradoAcaOK: { type : String},
    IdGradoAcaOK: { type : String},
    GradoAca: { type : String},
    IdTipoHorarioOK: { type : String},
    IdHorarioOK: { type : String},
    Horario: { type : String},
});

  //Education
  
  export default mongoose.model(
    'grupos',
    gruposSchema,
    'grupos'
);