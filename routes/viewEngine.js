const router = require("express").Router()
const viewEngineController = require('../controllers/viewEngineController')

// This is based on MVC-model view controller 
router.get('/home', viewEngineController.blog_post);

router.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname })
    //render ejs file
    res.render('about', { title: 'About' })

});


router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' })
})

// Redirect to another page 
router.get('/about-us', (req, res) => {
    res.redirect('/api/about')
});

// 404 page ,must be at bottom
router.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    //render ejs file
    res.render('404', { title: '404' })
})




module.exports = router