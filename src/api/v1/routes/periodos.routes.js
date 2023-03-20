//Commerce
import { Router } from 'express';
import * as periodosController from '../controllers/periodos.controller';
const router = Router();
//ficRouter.get('/list', ProdServController.getProdServList);
router.get('/', periodosController.getPeriodosList);
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
router.get('/:id', periodosController.getPeriodosItem);
router.post('/', periodosController.posPeriodosItem);
router.put('/:id', periodosController.putPeriodosItem);
export default router;