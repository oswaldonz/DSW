//Education
import carreras from "../models/carreras";
import boom from '@hapi/boom';


//FIC: GET PRODUCTS AND SERVICES LIST
export const getCarrerasList = async () => {
    let carrerasList;
    try {
          carrerasList = await carreras.find();
          return(carrerasList);
    } catch (error) {
      res.status(500).json({ message: 'Error: ' + ficError });
      throw boom.internal(error);
    }
  };

  //FIC: GET PRODUCT OR SERVICE BY ID
export const getCarrerasItem = async (id, keyType) => {
    let carrerasItem;
    console.log(id);
    try {
      if (keyType === 'PK') {
        carrerasItem = await carreras.findOne({
          IdCarreraPK: id,
        });
      } else if (keyType === 'BK') {
          carrerasItem = await carreras.findOne({
          IdCarrerBK: id,
        });
      }
      return(carrerasItem);
    } catch (error) {
      throw boom.internal(error);
    }
  };


  //Education
//FIC: POST (ADD) Instituto.
export const postCarreras = async (paCarrerasItem) => {
    try {
        const newCarrerasItem = new carreras(paCarrerasItem);
        return await newCarrerasItem.save();
    } catch (error) {
      throw error;
    }
}

//FIC: SERVICES PUT
// PUT (MODIFY) carreras
export const putCarrerasItem = async (id, paCarrerasItem) => {
  
    try {
        //console.log("FIC: PUT API INSTITUTO", id);
    return await carreras.findOneAndUpdate({ IdCarreraOK: id }, paCarrerasItem, {
    new: true,
    });
    } catch (error) {
    throw boom.badImplementation(error);
    }
};
