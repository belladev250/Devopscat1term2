import { celebrate } from "celebrate";
import { Router } from "express";
import asyncHandler from "../../middlewares/async.handler";
import { TokenController } from "./token.controller";
import { askToken, paramToken  } from "./token.validator";


const router = Router()

router.route('/ask')
    .post(
    celebrate({
        body:askToken
    }),
    asyncHandler(TokenController.getToken)
)
router.route('/:token')
.get(
    celebrate({
        params:paramToken
    }),
    asyncHandler(TokenController.getRemaingDays)
)
export default router;