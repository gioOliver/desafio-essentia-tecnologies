import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';

import { storeTask } from '../controllers/task.controller';

const router = Router();

router.use(authMiddleware);

router.post('/', storeTask);

export { router as taskRouter };