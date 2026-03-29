import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';

import {listTasks, storeTask, updateTaskController} from '../controllers/task.controller';

const router = Router();

router.use(authMiddleware);

router.post('/', storeTask);
router.get('/', listTasks);
router.put('/:id', updateTaskController);

export { router as taskRouter };