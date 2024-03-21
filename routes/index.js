const UserController = require('../controllers/UserController')

const router = require('express').Router()

// * GET /LANDINGPAGE
router.get('/landingpage', UserController.landingPage)

// * GET / REGISTER
router.get('/', UserController.loginForm)
router.get('/register', UserController.regForm)

// * POST / REGISTER
router.post('/register', UserController.postReg)

// * GET /LOGIN
router.get('/login', UserController.loginForm)

router.post('/login', UserController.postReg)

module.exports = router