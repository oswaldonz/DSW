import * as carrerasService from '../services/carreras.service';
import boom from '@hapi/boom';
import carreras from '../models/carreras';

//FIC: API GET
//----------------------------------------
//FIC: Todos los Productos/Servicios.
export const getCarrerasList = async (req, res, next) => {
    try{
      const carrerasList = await carrerasService.getCarrerasList;
      if (!carrerasList) {
        throw boom.notFound('No se encontraron productos/servicios registrados.');
      } else if (carrerasList) {
        res.status(200).json(carrerasList);
      }

      } catch(error) {
        next(error);
      }
    };

    //FIC: Solo un Producto/Servicio.
  export const getCarrerasItem = async (req, res, next) => {
    try {
      //FIC: obtener parametro id mediante la
      //desestructuracion de objetos
      const { id } = req.params;
      //FIC: se obtiene parametro de la forma
      //clase/objeto.
     //const idProdServ = req.params.id;
     const keyType = req.query.keyType || 'PK';
     const carrerasItem = await carrerasService.getCarrerasItem(id, keyType);
     if (!carrerasItem) {
      throw boom.notFound('No se encontraron productos/servicios registrados.');
     } else if (carrerasItem) {
      res.status(200).json(carrerasItem);
     }
   }catch(error){
    next(error);
  }
};

//FIC: API POST.
//----------------------------------------
//FIC: API POST (ADD) Producto y/o Servicio.
export const posCarrerasItem = async (req, res, next) => {
    try {
      const paCarrerasItem = req.body;
      const newCarrerasItem = await carrerasService.postCarreras(paCarrerasItem);
      if (!newCarrerasItem) {
        throw boom.badRequest('No se pudo crear el Producto y/o Servicio.');
      } else if (newCarrerasItem) {
        res.status(201).json(newCarrerasItem);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
};
//FIC: API PUT.
//----------------------------------------
//FIC: API PUT (MODIFY) Producto y/o Servicio.
  export const putCarrerasItem = async (req, res, next) => {
    try {
    const { id } = req.params;
        console.log('FIC: controller id -> ', id);
    const paCarrerasItem = req.body;
        console.log('FIC: controller body -> ', paCarrerasItem);
    const updatedCarrerasItem = await carrerasService.putCarrerasItem(id, paCarrerasItem );
    if (!updatedCarrerasItem) {
    throw boom.badRequest('No se pudo actualizar la carrera.');
    } else if (updatedCarrerasItem) {
    res.status(200).json(updatedCarrerasItem);
    }
    } catch (error) {
    next(error);
    }
  };