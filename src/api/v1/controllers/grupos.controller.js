import * as gruposServices from '../services/grupos.service';
import boom from '@hapi/boom';
import grupos from '../models/grupos';

//FIC: API GET
//----------------------------------------
//FIC: Todos los Productos/Servicios.
export const getGruposList = async (req, res, next) => {
    try{
      const gruposList = await gruposServices.getGruposList;
      if (!gruposList) {
        throw boom.notFound('No se encontraron productos/servicios registrados.');
      } else if (gruposList) {
        res.status(200).json(gruposList);
      }

    } catch(error) {
        next(error);
    }
};

//FIC: Solo un Producto/Servicio.
export const getGruposItem = async (req, res, next) => {
    try {
      //FIC: obtener parametro id mediante la
      //desestructuracion de objetos
      const { id } = req.params;
      //FIC: se obtiene parametro de la forma
      //clase/objeto.
      //const idProdServ = req.params.id;
     const keyType = req.query.keyType || 'PK';
     const gruposItem = await gruposServices.getGruposItem(id, keyType);
    if (!gruposItem) {
      throw boom.notFound('No se encontraron productos/servicios registrados.');
    } else if (gruposItem) {
      res.status(200).json(gruposItem);
    }
  }catch(error){
    next(error);
  }
};

//FIC: API POST.
//----------------------------------------
//FIC: API POST (ADD) Producto y/o Servicio.
export const posGrupoItem = async (req, res, next) => {
  try {
    const paGrupoItem = req.body;
    const newGrupoItem = await gruposServices.postGrupos(paGrupoItem);
    if (!newGrupoItem) {
      throw boom.badRequest('No se pudo crear el Producto y/o Servicio.');
    } else if (newGrupoItem) {
      res.status(201).json(newGrupoItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//FIC: API PUT.
//----------------------------------------
//FIC: API PUT (MODIFY) Producto y/o Servicio.
export const putGrupoItem = async (req, res, next) => {
  try {
  const { id } = req.params;
      console.log('FIC: controller id -> ', id);
  const paGrupoItem = req.body;
      console.log('FIC: controller body -> ', paGrupoItem);
  const updatedGrupoItem = await gruposServices.putgruposItem(id, paGrupoItem );
  if (!updatedGrupoItem) {
  throw boom.badRequest('No se pudo actualizar la carrera.');
  } else if (updatedGrupoItem) {
  res.status(200).json(updatedGrupoItem);
  }
  } catch (error) {
  next(error);
  }
};