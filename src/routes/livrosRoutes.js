import { response, Router} from 'express';

const router = Router()

import { getLivros, cadastrarLivros, getClientes } from '../controllers/livrosController';

router.get("/", getLivros);
router.post("/criar", cadastrarLivros)

router.get("/", getClientes)

export default router;