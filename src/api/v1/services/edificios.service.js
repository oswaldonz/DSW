//Education
import edificios from '../models/edificios';
import boom from '@hapi/boom';

//FIC: GET PRODUCTS AND SERVICES LIST
export const getEdificiosList = async () => {
    let edificiosList;
    try {
        edificiosList = await edificios.find();
          return(edificiosList);
    } catch (error) {
      //res.status(500).json({ message: 'Error: ' + ficError });
      throw boom.internal(error);
    }
};

//FIC: GET PRODUCT OR SERVICE BY ID
export const getEdificiosItem = async (id, keyType) => {
    let edificiosItem;
   
    try {
      if (keyType === 'PK') {
         edificiosItem = await edificios.findOne({
         IdEdificioPK: id,
        });
      } else if (keyType === 'BK') {
          edificiosItem = await edificios.findOne({
          IdEdificioBK: id,
        });
      }
      return(edificiosItem);
    } catch (error) {
      throw boom.internal(error);
    }
};


//FIC: POST (ADD) Instituto.
export const postEdificios = async (paEdificiosItem) => {
  try {
      const newEdificiosItem = new edificios(paEdificiosItem);
      return await newEdificiosItem.save();
  } catch (error) {
    throw error;
  }
}

//FIC: SERVICES PUT
// PUT (MODIFY) carreras
export const putEdificiosItem = async (id, paEdificiosItem) => {

  try {
      //console.log("FIC: PUT API INSTITUTO", id);
  return await edificios.findOneAndUpdate({ IdEdificioPK: id }, paEdificiosItem, {
  new: true,
  });
  } catch (error) {
  throw boom.badImplementation(error);
  }
};
