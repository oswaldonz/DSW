import * as edificiosServices from '../services/edificios.service';
import boom from '@hapi/boom';
import edificios from '../models/edificios';

//FIC: API GET
//----------------------------------------
//FIC: Todos los Productos/Servicios.
export const getEdificiosList = async (req, res, next) => {
    try{
      const edificiosList = await edificiosServices.getEdificiosList;
      if (!edificiosList) {
        throw boom.notFound('No se encontraron productos/servicios registrados.');
      } else if (edificiosList) {
        res.status(200).json(edificiosList);
      }

    } catch(error) {
        next(error);
    }
};

//FIC: Solo un Producto/Servicio.
export const getEdificiosItem = async (req, res, next) => {
    try {
      //FIC: obtener parametro id mediante la
      //desestructuracion de objetos
      const { id } = req.params;
      //FIC: se obtiene parametro de la forma
      //clase/objeto.
      //const idProdServ = req.params.id;
     const keyType = req.query.keyType || 'PK';
     const edificiosItem = await edificiosServices.getEdificiosItem(id, keyType);
    if (!edificiosItem) {
      throw boom.notFound('No se encontraron productos/servicios registrados.');
    } else if (edificiosItem) {
      res.status(200).json(edificiosItem);
    }
  }catch(error){
    next(error);
  }
};

//FIC: API POST.
//----------------------------------------
//FIC: API POST (ADD) Producto y/o Servicio.
export const posEdificiosItem = async (req, res, next) => {
  try {
    const paEdificiosItem = req.body;
    const newEdificiosItem = await edificiosServices.postEdificios(paEdificiosItem);
    if (!newEdificiosItem) {
      throw boom.badRequest('No se pudo crear el Producto y/o Servicio.');
    } else if (newEdificiosItem) {
      res.status(201).json(newEdificiosItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//FIC: API PUT.
//----------------------------------------
//FIC: API PUT (MODIFY) Producto y/o Servicio.
export const putedificiosItem = async (req, res, next) => {
  try {
  const { id } = req.params;
      console.log('FIC: controller id -> ', id);
  const paEdificiosItem = req.body;
      console.log('FIC: controller body -> ', paEdificiosItem);
  const updatedEdificiosItem = await edificiosServices.putEdificiosItem(id, paEdificiosItem );
  if (!updatedEdificiosItem) {
  throw boom.badRequest('No se pudo actualizar la carrera.');
  } else if (updatedEdificiosItem) {
  res.status(200).json(updatedEdificiosItem);
  }
  } catch (error) {
  next(error);
  }
};