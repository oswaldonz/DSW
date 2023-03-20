//Education
import grupos from '../models/grupos';
import boom from '@hapi/boom';

//FIC: GET PRODUCTS AND SERVICES LIST
export const getGruposList = async () => {
    let gruposList;
    try {
        gruposList = await grupos.find();
          return(gruposList);
    } catch (error) {
      //res.status(500).json({ message: 'Error: ' + ficError });
      throw boom.internal(error);
    }
};

//FIC: GET PRODUCT OR SERVICE BY ID
export const getGruposItem = async (id, keyType) => {
    let gruposItem;
   
    try {
      if (keyType === 'PK') {
         gruposItem = await grupos.findOne({
         IdGrupoPK: id,
        });
      } else if (keyType === 'BK') {
         gruposItem = await grupos.findOne({
         IdGrupoBK: id,
        });
      }
      return(gruposItem);
    } catch (error) {
      throw boom.internal(error);
    }
};

//FIC: POST (ADD) Instituto.
export const postGrupos = async (paGruposItem) => {
  try {
      const newGrupoItem = new grupos(paGruposItem);
      return await newGrupoItem.save();
  } catch (error) {
    throw error;
  }
}

//FIC: SERVICES PUT
// PUT (MODIFY) carreras
export const putgruposItem = async (id, paGrupoItem) => {

  try {
      //console.log("FIC: PUT API GRUPO", id);
  return await grupos.findOneAndUpdate({ IdGrupoPK: id }, paGrupoItem, {
  new: true,
  });
  } catch (error) {
  throw boom.badImplementation(error);
  }
};