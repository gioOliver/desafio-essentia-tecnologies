import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';

import { listTasks
    , storeTask
    , updateTaskController
    , deleteTaskController } from '../controllers/task.controller';

const router = Router();

router.use(authMiddleware);

router.post('/', storeTask);
router.get('/', listTasks);
router.put('/:id', updateTaskController);
router.delete('/:id', deleteTaskController);

export { router as taskRouter };