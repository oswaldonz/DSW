import * as mongoose from 'mongoose';

const edificiosSchema  = new mongoose.Schema({
    IdEdificioPK : { type : Number, required : true },
    IdEdificioOK: { type : String},
    IdEdificioBK: { type : String},
    IdInstitutoOK: { type : String},
    DesEdificio: { type : String},
    Alias: { type : String},
    cat_edificios_espacios: {type: Array},
    detail_row: {type : Object}
});
  
  
//Education
  
  export default mongoose.model(
      'cat_edificios',
      edificiosSchema,
      'cat_edificios'
  );
  