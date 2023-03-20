//Education
import { Router } from 'express';
import config from '../../../config/config';
// Import Routes

import carrerasRoutes from './carreras.routes';
import edificiosRoutes from './edificios.routes';
import gruposRoutes from './grupos.routes';
import periodosRoutes from './periodos.routes';
//import ordersRoutes from './orders.routes';
const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);

  // Routes
  router.use('/carreras', carrerasRoutes);
  router.use('/edificios',edificiosRoutes);
  router.use('/grupos',gruposRoutes);
  router.use('/periodos',periodosRoutes);
  //router.use('/orders', ordersRoutes);

  // Return Router
  return router;
};
module.exports = routerAPI;