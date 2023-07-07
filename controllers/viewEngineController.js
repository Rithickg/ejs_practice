const blog_post = (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname })
    //render ejs file
    const blogs = [
        {
            title: "this is one", description: "losdfs sdjkbsf  sjffjksff sfjjfsfbajkf f afkjsf,mf fjfjfa fjfbfj"
        },
        {
            title: "this is two", description: "losdfs sdjkbsf  sjffjksff sfjjfsfbajkf f afkjsf,mf fjfjfa fjfbfj"
        },
        {
            title: "this is three", description: "losdfs sdjkbsf  sjffjksff sfjjfsfbajkf f afkjsf,mf fjfjfa fjfbfj"
        }
    ]

    res.render('index', { title: 'Home', blogs })
}

module.exports = { blog_post }