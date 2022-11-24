const express = require('express');
const cors = express();
const app = express();

app.use(cors());

app.use('./login', (req, res) => {
    res.send({
        token:'test123'
    });
});

app.listen(8080, () => console.log('api is runnins on http://localhost:8080/login'));