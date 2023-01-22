const express = require('express')

var cors = require('cors')

require('dotenv').config()

const connetToMongo = require('./config/db.js')

// const userRoutes = require('./routes/userRoutes')
// const chatRoutes = require('./routes/chatRoutes')
// const messageRoutes = require('./routes/messageRoutes')

connetToMongo()

const port = process.env.PORT || 8001

const app = express()
app.use(cors())

app.use(express.json())

// app.get('/', (req, res) => res.send('Server is running........'))

// app.use('/api/user', userRoutes)
// app.use('/api/chat', chatRoutes)
// app.use('/api/message', messageRoutes)

app.listen(port, () => console.log(` ChatApp Backend is running on server...${port} `))

// Cyclick deplyment setup
const path = require('path')

app.use(express.static(path.join(__dirname, './Frontend/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'))
});