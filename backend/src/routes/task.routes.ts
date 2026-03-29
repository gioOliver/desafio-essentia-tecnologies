import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';

import {listTasks, storeTask} from '../controllers/task.controller';

const router = Router();

router.use(authMiddleware);

router.post('/', storeTask);
router.get('/', listTasks);

export { router as taskRouter };