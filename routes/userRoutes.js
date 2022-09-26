const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'data/user.json')

const getUsers = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []
    try {
        return JSON.parse(data)
    } catch (erro) {
        return []
    }
}

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

const searchID = (id, users) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id)
            return i
    }
    return null
}

const userRoute = (app) => {
    app.route('/users/:id?')
        .get((req, res) => {
            getF(req, res)
        })
        .post((req, res) => {
            const users = getUsers()
            if (searchID(req.body.id, users) === null)
                postF(req, res, users)
            else
                res.send('invalid ID')
        })
        .put((req, res) => {
            const users = getUsers()
            if (searchID(req.params.id, users) === null)
                res.send('invalid ID')
            else
                putF(req, res, users)
        })
        .delete((req, res) => {
            const users = getUsers()
            if (searchID(req.params.id, users) === null)
                res.send('invalid ID')
            else {
                deleteF(req, res, users)
            }
        })
}

const getF = (req, res) => {
    const users = getUsers()
    const id = searchID(req.params.id, users)
    if (id !== null)
        res.status(200).send(users[id])
    else
        res.status(200).send({ users })
}

const postF = (req, res, users) => {
    users.push(req.body)
    saveUser(users)
    res.status(200).send('OK')
}

const putF = (req, res, users) => {
    saveUser(users.map(user => {
        if (user.id === req.params.id) {

            return {
                ...user,
                ...req.body
            }
        }
        return user
    }))
    res.status(200).send('OK')
}

const deleteF = (req, res, users) => {
    saveUser(users.filter(user => user.id !== req.params.id))
    res.status(200).send('OK')
}

module.exports = userRoute