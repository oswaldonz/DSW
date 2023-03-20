import * as periodosServices from '../services/periodos.service';
import boom from '@hapi/boom';
import periodos from '../models/carreras';

//FIC: API GET
//----------------------------------------
//FIC: Todos los Productos/Servicios.
export const getPeriodosList = async (req, res, next) => {
    try{
      const periodosList = await periodosServices.getPeriodosList;
      if (!periodosList) {
        throw boom.notFound('No se encontraron productos/servicios registrados.');
      } else if (periodosList) {
        res.status(200).json(periodosList);
      }

    } catch(error) {
        next(error);
    }
};

//FIC: Solo un Producto/Servicio.
export const getPeriodosItem = async (req, res, next) => {
    try {
      //FIC: obtener parametro id mediante la
      //desestructuracion de objetos
      const { id } = req.params;
      //FIC: se obtiene parametro de la forma
      //clase/objeto.
      //const idProdServ = req.params.id;
     const keyType = req.query.keyType || 'OK';
     const periodosItem = await periodosServices.getPeriodosItem(id, keyType);
    if (!periodosItem) {
      throw boom.notFound('No se encontraron productos/servicios registrados.');
    } else if (periodosItem) {
      res.status(200).json(periodosItem);
    }
  }catch(error){
    next(error);
  }
};

//FIC: API POST.
//----------------------------------------
//FIC: API POST (ADD) Producto y/o Servicio.
export const posPeriodosItem = async (req, res, next) => {
    try {
      const paPeriodosItem = req.body;
      const newPeriodoItem = await periodosServices.postPeriodos(paPeriodosItem);
      if (!newPeriodoItem) {
        throw boom.badRequest('No se pudo crear el Producto y/o Servicio.');
      } else if (newPeriodoItem) {
        res.status(201).json(newPeriodoItem);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
};
//FIC: API PUT.
//----------------------------------------
//FIC: API PUT (MODIFY) Producto y/o Servicio.
  export const putPeriodosItem = async (req, res, next) => {
    try {
    const { id } = req.params;
        console.log('FIC: controller id -> ', id);
    const paPeriodosItem = req.body;
        console.log('FIC: controller body -> ', paPeriodosItem);
    const updatedPeriodosItem = await periodosServices.putPeriodosItem(id, paPeriodosItem );
    if (!updatedPeriodosItem) {
    throw boom.badRequest('No se pudo actualizar el periodo');
    } else if (updatedPeriodosItem) {
    res.status(200).json(updatedPeriodosItem);
    }
    } catch (error) {
    next(error);
    }
    };