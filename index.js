const express = require('express')

var cors = require('cors')

require('dotenv').config()

const port = process.env.PORT || 8001

const app = express();

app.use(cors());

app.listen(port, () => console.log(`Talk-sicK is running on server...${port} `));

// Deployment Setup
const path = require('path')

app.use(express.static(path.join(__dirname, './Frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'));
});
