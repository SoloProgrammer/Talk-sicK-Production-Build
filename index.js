const express = require('express')

var cors = require('cors')

const app = express();

app.use(cors());

// Cyclick deplyment setup
const path = require('path')

app.use(express.static(path.join(__dirname, './Frontend/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'))
});
