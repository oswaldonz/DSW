//Commerce
import { Router } from 'express';
import * as edificiosController from '../controllers/edificios.controller';
const router = Router();
//ficRouter.get('/list', ProdServController.getProdServList);
router.get('/', edificiosController.getEdificiosList);
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
router.get('/:id', edificiosController.getEdificiosItem);
router.post('/', edificiosController.posEdificiosItem);
router.put('/:id', edificiosController.putedificiosItem);
export default router;