var passport = require('passport');
const router = require(`express`).Router()
// this sets the rout for google authenitication to occure
router.get(`/google`, passport.authenticate('google',
    { scope: [`https://www.googleapis.com/auth/userinfo.email`] } ))




router.get('/google/callback', passport.authenticate('google'), async (req, res) => {
        // This tries to save the session, and if it fails it makes sure the passport session is deleted via req.logout()
        req.session.save(err => {
            if (err) {
              req.logout()
              res.sendStatus(500)
            }
            else res.redirect(process.env.CLIENT_ORIGIN)
          })
        })
router.get(`/logout`, async (req,res) => {
            req.session.destroy()
            req.logout()
            res.redirect(process.env.CLIENT_ORIGIN)
          })


          module.exports = router
