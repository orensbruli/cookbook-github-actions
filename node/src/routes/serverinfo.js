'use strict';

import {Router} from 'express';
import ip from 'ip';
import models from '../models';

const router = new Router();

router.get('/', (req, res) => {
  const serverinfo = new models.ServerInfo();
  serverinfo.envName = process.env.ENV_NAME;
  serverinfo.ip = ip.address();
  serverinfo.serverTime = new Date().toUTCString();
  return res.json(serverinfo);
});

export default router;
