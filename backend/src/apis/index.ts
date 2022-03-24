import { Router } from 'express';
import token from './token/token.route';

const router = Router();

router.use('/token', token)

export default router;