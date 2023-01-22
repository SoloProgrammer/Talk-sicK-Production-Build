const express = require('express')

var cors = require('cors')

require('dotenv').config()

const port = process.env.PORT || 8001

const app = express();

app.use(cors());

app.listen(port, () => console.log(` ChatApp Backend is running on server...${port} `))

// Cyclick deplyment setup
const path = require('path')

app.use(express.static(path.join(__dirname, './Frontend/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'))
});