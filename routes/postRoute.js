const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'data/posts.json')
const getPosts = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []
    try {
        return JSON.parse(data)
    } catch (erro) {
        return []
    }
}

const savePost = (posts) => fs.writeFileSync(filePath, JSON.stringify(posts, null, '\t'))

const postRoute = (app) => {

app.route('/posts/:title?')
    .get((req, res) => {
        const posts = getPosts()
        res.status(200).send({ posts })
    })
    .post((req, res) => {
        const posts = getPosts()
        
        posts.push(req.body)
        savePost(posts)
        res.status(200).send('OK')
    })
    .delete((req, res) => {
        const posts = getPosts()
        console.log(req.params.title)
        savePost(posts.filter(posts => posts.title !== req.params.title))
        res.status(200).send('OK')
    })
}

module.exports = postRoute