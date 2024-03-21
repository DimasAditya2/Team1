const {User} = require('../models')
const bcrypt = require('bcryptjs');

class UserController {
    static async landingPage(req, res) {
        try {
            res.render('landingPage')
        } catch (error) {
            res.send(error)
        }
    }

    static async regForm(req, res) {
        try {
            res.render('auth-pages/sign_up_page')
        } catch (error) {
            res.send(error)
        }
    }

    static async loginForm(req, res) {
        try {
            res.render('auth-pages/login_page')
        } catch (error) {
            res.send(error)
        }
    }

    static async postReg(req, res) {
        // create user baru yang isinya username, email, password dan role
        // console.log(req.body)
        try {
            const {name, email, password, role} = req.body 
            await User.create({
                name,
                email,
                password,
                role    
            });
            res.redirect('/login')
        } catch (error) {
            res.send(error)
        }
    }

    static async postLogin(req, res) {
        // apakah dari username dan password di input, usernya ada
        //1. findOne User dari username
        //2. kalau user ada, compare plain password sama dengan hash password (di db)
        //3. kalau tidak sama ga boleh masuk ke home atau keluar error
        //4. kalau password sesuai maka redirect ke home

        try {
            const {username, password} = req.body
            await User.findOne({ where: {username}})
            if (User) {
                const isValidPassword = bcrypt.compareSync(password, User.password)

                if (isValidPassword) {
                    return res.redirect('/') 
                } else {
                    const error = 'invalid username/password'
                    return res.redirect(`/login?error=${error}`)
                }
            }
            
        } catch (error) {
            res.send(error)
        }
    }
    
}

module.exports = UserController