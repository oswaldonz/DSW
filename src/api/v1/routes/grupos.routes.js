//Commerce
import { Router } from 'express';
import * as gruposController from '../controllers/grupos.controller';
const router = Router();
//ficRouter.get('/list', ProdServController.getProdServList);
router.get('/', gruposController.getGruposList);
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
router.get('/:id', gruposController.getGruposItem);
router.post('/', gruposController.posGrupoItem);
router.put('/:id', gruposController.putGrupoItem);
export default router;