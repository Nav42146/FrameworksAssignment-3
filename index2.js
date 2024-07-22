import express from 'express'; 

import data from './data/MOCK_DATA.json' assert { type: 'json' };

const app = express(); 

const PORT = 3000;

app.get("/cars", (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});
