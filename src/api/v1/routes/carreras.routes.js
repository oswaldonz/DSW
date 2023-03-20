//Education
import { Router } from 'express';
import * as carrerasController from '../controllers/carreras.controller';
const router = Router();
//router.get('/list',carrerasController.getCarrerasList);
router.get('/', carrerasController.getCarrerasList);
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
router.get('/:id', carrerasController.getCarrerasItem);
router.post('/', carrerasController.posCarrerasItem);
router.put('/:id', carrerasController.putCarrerasItem);
export default router;

