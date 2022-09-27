const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoutes')
const postRoute = require('./routes/postRoute')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Hello!\n You can call:\n /users -> to get/post/put/delete users \n /posts ->to get/post/delete posts\nyou can se more at github README'))

userRoute(app);
postRoute(app)

app.listen(port, () => console.log('API port:', port))
