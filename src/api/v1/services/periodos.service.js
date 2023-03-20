//Education
import periodos from '../models/periodos';
import boom from '@hapi/boom';

//FIC: GET PRODUCTS AND SERVICES LIST
export const getPeriodosList = async () => {
    let periodosList;
    try {
        periodosList = await periodos.find();
          return(periodosList);
    } catch (error) {
      //res.status(500).json({ message: 'Error: ' + ficError });
      throw boom.internal(error);
    }
};

//FIC: GET PRODUCT OR SERVICE BY ID
export const getPeriodosItem = async (id, keyType) => {
    let periodosItem;
   
    try {
      if (keyType === 'PK') {
         periodosItem = await periodos.findOne({
         IdPeriodoPK: id,
        });
      } else if (keyType === 'BK') {
        periodosItem = await periodos.findOne({
         IdPeriodoBK: id,
        });
      }
      return(periodosItem);
    } catch (error) {
      throw boom.internal(error);
    }
};

//FIC: POST (ADD) Instituto.
export const postPeriodos = async (paPeriodosItem) => {
    try {
        const newPeriodosItem = new periodos(paPeriodosItem);
        return await newPeriodosItem.save();
    } catch (error) {
      throw error;
    }
}

//FIC: SERVICES PUT
// PUT (MODIFY) 
export const putPeriodosItem = async (id, paPeriodosItem) => {
  
    try {
        //console.log("FIC: PUT API INSTITUTO", id);
    return await periodos.findOneAndUpdate({ IdPeriodoPK: id }, paPeriodosItem, {
    new: true,
    });
    } catch (error) {
    throw boom.badImplementation(error);
    }
};
