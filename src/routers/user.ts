import express from 'express';
import controller from '../controllers/user';

const router = express.Router();

router.get('/all', controller.controllerUserReadAll);
router.get('/find/:username', controller.controllerUserReadNAme);
// router.get('/find/:userId', controller.controllerReadUser);
router.post('/create', controller.controllerUserCreate);

export = router;
