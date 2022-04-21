import express from 'express';
import controller from '../controllers/user';

const router = express.Router();

router.get('/all', controller.controllerUserReadAll);
router.get('/find/:username', controller.controllerUserReadNAme);
router.post('/signup', controller.controllerSignup);
router.post('/signin', controller.controllerSignin);

export = router;
